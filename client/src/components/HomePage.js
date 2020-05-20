import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import christmas from "../assets/christmas.jpg";
import macarons from "../assets/macarons.jpg";
import shirt from "../assets/shirt.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="">
      <div className="container title">Kategorije poklona:</div>
      <div className="d-flex justify-content-center container">
        <Link to="/register" style={{ width: "20rem", height: "20rem" }}>
          <img
            src={macarons}
            alt="Food"
            className="img-fluid col-sm picture"
            style={{ width: "20rem", height: "20rem" }}
          />
        </Link>
        <Link to="/register" style={{ width: "20rem", height: "20rem" }}>
          <img
            src={shirt}
            alt="Shirt"
            className="img-fluid col-sm picture"
            style={{ width: "20rem", height: "20rem" }}
          />
        </Link>
        <Link to="/register" style={{ width: "20rem", height: "20rem" }}>
          <img
            src={christmas}
            alt="Cristmas"
            className="img-fluid col-sm picture"
            style={{ width: "20rem", height: "20rem" }}
          />
        </Link>
      </div>
      <div className="d-flex justify-content-center container gifts">
        <div className="gift-title d-flex container-fluid col-sm">
          Za ljubitelje hrane
        </div>
        <div className="gift-title d-flex container-fluid col-sm">
          Pokloni za njega
        </div>
        <div className="gift-title d-flex container-fluid col-sm">
          Novogodišnji pokloni
        </div>
      </div>
    </div>
  );
};

export default HomePage;
