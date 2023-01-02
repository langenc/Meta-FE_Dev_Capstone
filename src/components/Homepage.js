import React from "react";
import "../css/Homepage.css";
import imgPasta from "../assets/Pasta.png";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item flex-item-1">
          <div className="vertical-flex-container">
            <div className="vertical-flex-item vertical-flex-item-border"></div>
            <div className="vertical-flex-item vertical-flex-item-center">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
              <p className="shortDescription">
                Welcome to Little Lemon, a cozy and charming restaurant
                featuring delicious Italian-inspired dishes. Our menu includes a
                variety of pasta, seafood, and meat dishes, as well as an
                extensive wine list. We also offer online ordering and
                reservations for your convenience. Come visit us and experience
                the taste of Italy at Little Lemon.
              </p>
              <Link to="/reservations">
                <button className="reserveButton">Reserve a table</button>
              </Link>
            </div>
            <div className="vertical-flex-item vertical-flex-item-center">
              <img src={imgPasta} alt="Pasta" className="imgPasta" />
            </div>
            <div className="vertical-flex-item vertical-flex-item-border"></div>
          </div>
        </div>
        <div className="flex-item flex-item-2">Item 2</div>
        <div className="flex-item flex-item-3">Item 3</div>
        <div className="flex-item flex-item-4">Item 4</div>
      </div>
    </>
  );
}

export default Homepage;
