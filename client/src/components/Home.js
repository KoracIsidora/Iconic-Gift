import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "../assets/first (1).jpeg";
import Second from "../assets/first (2).jpeg";
import Third from "../assets/first (3).jpeg";
import Carousel from "react-bootstrap/Carousel";
import GiftList from "./Gift";

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item> 
          <img
            className="d-block img-fluid slika"
            src={First}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid slika"
            src={Second}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid slika"
            src={Third}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <GiftList></GiftList>
    </div>
  );
};

export default Home;
