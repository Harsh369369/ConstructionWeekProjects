import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getSections = async () => {
  const response = await axios.get(`${API_URL}/sections`);
  return response.data;
};