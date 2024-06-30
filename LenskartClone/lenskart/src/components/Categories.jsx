import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const handleClick = async (link, productListType, e) => {
    e.preventDefault();
    try {
      const serverLink = `http://localhost:3000${link}`;
      let res = await fetch(serverLink);
      if (res.ok) {
        const data = await res.json();
        navigate("/products", { state: { products: data, productListType } });
      } else {
        console.log(`Server responded with a ${res.status} error.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      justifyContent={"space-between"}
      padding={"0.5rem 2rem"}
      backgroundColor={"#f5f5f5"}
      gap={"20px"}
      marginTop={"170px"}
    >
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png"
            backgroundColor={"lightpink"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products?type=eyeglasses", "EYEGLASSES", e)}
          />
          <Text paddingY={"5px"}>Eyeglasses</Text>
        </Flex>
      </Flex>
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png"
            backgroundColor={"lightpink"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products?type=screenglasses", "SUNGLASSES", e)}
          />
          <Text>Sunglasses</Text>
        </Flex>
      </Flex>
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png"
            backgroundColor={"lightpink"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products?type=screenglasses", "SCREEN GLASSES", e)}
          />
          <Text paddingY={"5px"}>Screen Glasses</Text>
        </Flex>
      </Flex>
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png"
            backgroundColor={"lightpink"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products?series=blu-lenses", "CONTACT LENSES", e)}
          />
          <Text paddingY={"5px"}>Contact Lenses</Text>
        </Flex>
      </Flex>
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png"
            backgroundColor={"lightpink"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products", "POWER SUNGLASSES", e)}
          />
          <Text paddingY={"5px"}>Power Sunglasses</Text>
        </Flex>
      </Flex>
      <Flex
        width={"16.3%"}
        backgroundColor={"white"}
        borderRadius={"5px"}
        padding={"5px"}
      >
        <Flex flexDirection={"column"} padding={"5px"}>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg"
            backgroundColor={"#fbf9f7"}
            borderRadius={"3px"}
            onClick={(e) => handleClick("/products", "PROGRESSIVE LENSES", e)}
          />
          <Text paddingY={"5px"}>Progressive Lenses</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Categories;
