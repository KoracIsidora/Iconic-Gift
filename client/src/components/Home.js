import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "../assets/first (1).jpeg";
import Second from "../assets/first (2).jpeg";
import Third from "../assets/first (3).jpeg";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 container"
            src={First}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 container"
            src={Second}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 container"
            src={Third}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
