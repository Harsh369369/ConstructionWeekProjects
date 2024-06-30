const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const SECRET_KEY = 'your_secret_key'; // Change this to your secret key
const expiresIn = '1h';

// Create a token from a payload
const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// Verify the token
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

// Check if the user exists in the database
const isAuthenticated = ({ username, password }) => {
  const userdb = router.db.get('users').value();
  const user = userdb.find(user => user.username === username);
  if (!user) return false;
  return bcrypt.compareSync(password, user.password);
};

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Register new user
server.post('/register', (req, res) => {
  const { username, password, firstname, lastname, email, avatar, userLevel } = req.body;

  const userdb = router.db.get('users').value();
  if (userdb.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: userdb.length + 1, username, password: hashedPassword, firstname, lastname, email, avatar, userLevel };

  router.db.get('users').push(newUser).write();
  res.status(201).json({ message: 'User registered successfully' });
});

// Login user
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!isAuthenticated({ username, password })) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const user = router.db.get('users').find({ username }).value();
  const access_token = createToken({ id: user.id, username });
  res.status(200).json({ access_token, user });
});

// Middleware to protect routes
server.use('/todos', (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Access denied' });

  const token = authHeader.split(' ')[1];
  try {
    verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

server.use(router);
server.listen(9090, () => {
  console.log('JSON Server is running on port 9090');
});
