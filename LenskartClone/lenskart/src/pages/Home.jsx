import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import ImageSlider from "../components/ImageSlider";
import BannerTwo from "../components/BannerTwo";
import Testinomial from "../components/Testinomial";
import ProductSlider from "../components/ProductSlider";
import BannerThree from "../components/BannerThree";
import BannerFour from "../components/BannerFour";
import TrendProduct from "../components/TrendProduct";
import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { Box } from "@chakra-ui/react";
import axios from 'axios';


const Home = () => {
  const [sections, setSections] = useState([]);
  const [showLoginPage, setShowLoginPage] = useState('none');


  useEffect(() => {
    axios.get('https://lenskartserver.onrender.com/sections')
      .then(response => {
        console.log('Data fetched successfully: ', response.data);
        setSections(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  

  const renderSection = (section) => {
    switch (section.type) {
      case "banner":
        return (
          <Banner
            key={section.id}
            image={section.imageLink}
            title={section.title}
            productType={section.productType}
            series={section.series}
            link={section.link}
            redirect={section.redirect}
          />
        );
      case "imageSlider":
        return <ImageSlider key={section.id} images={section.imageLink} link={section.link}/>;
      case "productSlider":
        return <ProductSlider key={section.id} title={section.title} link={section.link}/>;
      case "banner2":
        return (
          <BannerTwo
            key={section.id}
            title={section.title}
            images={section.imageLink}
          />
        );
      case "banner3":
        return (
          <BannerThree
            key={section.id}
            title={section.title}
            images={section.imageLink}
          />
        );
      case "banner4":
        return (
          <BannerFour
            key={section.id}
            title={section.title}
            images={section.imageLink}
          />
        );
      case "trendProduct":
        return <TrendProduct key={section.id} images={section.imageLink} />;
      case "testinomial":
        return <Testinomial key={section.id} />;
      default:
        return null;
    }
  };

  function showLogin() {
    setShowLoginPage('flex');
  }
  const hideLogin = () => {
    setShowLoginPage('none');
  };


  return (
    <>
      <Login visibility={showLoginPage} hideLogin={hideLogin}></Login>
      <Nav showLogin={showLogin}/>
      <Categories />
      {sections.map((section) =>
        Array.from({ length: section.repeat || 1 }).map((_, index) => (
          <React.Fragment key={`${section.id}-${index}`}>
            {renderSection(section)}
          </React.Fragment>
        ))
      )}
      <Footer />
    </>
  );
};

export default Home;


