import React, { useEffect, useState } from "react";
import { Image, Link } from "@chakra-ui/react";
import DividerHeading from "./DividerHeading";
import { useNavigate } from 'react-router-dom';

const Banner = ({ image, title, productType, redirect, link }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  let serverLink;
  let productListType;

  if (redirect === 'productPage') {
    serverLink = `http://localhost:3000${link}`;
    productListType = productType;
  } else {
    serverLink = `http://localhost:3000${link}`;
    productListType = 'ALL';
  }

  const handleBannerClick = (e) => {
    e.preventDefault();
    if (redirect === 'productPage') {
      fetchProductsAndNavigate();
    } else {
      navigate(`${link}`);
    }
  };

  const fetchProductsAndNavigate = async () => {
    try {
      let res = await fetch(serverLink);
      if (res.ok) {
        const data = await res.json();
        navigate('/products', { state: { products: data, productListType } });
      } else {
        console.log(`Server responded with a ${res.status} error.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (redirect === 'productPage') {
      const fetchData = async () => {
        try {
          let res = await fetch(serverLink);
          if (res.ok) {
            const data = await res.json();
            setProducts(data);
          } else {
            console.log(`Server responded with a ${res.status} error.`);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [serverLink, redirect]);

  return (
    <Link
      display={"flex"}
      width={'100%'}
      flexDirection={"column"}
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      mb={4}
      href="#"
      onClick={handleBannerClick}
    >
      {title && <DividerHeading title={title} />}
      <Image src={image} alt={title} />
    </Link>
  );
};

export default Banner;
