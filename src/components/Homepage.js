import React from "react";
import "../css/Homepage.css";
import imgPasta from "../assets/Pasta.png";
import { Link } from "react-router-dom";
import MenuItemComponent from "./MenuItemComponent";
import CustomerFeedbackComponent from "./CustomerFeedbackComponent";
import fettuccineAlfredo from "../assets/fettuccine_alfredo.png";
import spaghetti from "../assets/Spaghetti.png";
import pizza from "../assets/pizza.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";

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
        <div className="flex-item flex-item-2">
          <h1 className="headingMiddle">Specials</h1>
          <div className="menuitem-vertical-flex-container">
            <div className="menuitem-vertical-flex-item"></div>
            <div className="menuitem-vertical-flex-item">
              <MenuItemComponent
                imageUrl={spaghetti}
                imageAlt="description of image"
                heading="Spaghetti Bolognese"
                price="$12"
                description="A classic Italian dish made with spaghetti noodles and a meat sauce made with ground beef, tomato sauce, and vegetables."
              />
            </div>
            <div className="menuitem-vertical-flex-item">
              <MenuItemComponent
                imageUrl={pizza}
                imageAlt="description of image"
                heading="Margherita Pizza"
                price="$10"
                description="A simple pizza topped with tomato sauce, mozzarella cheese, and fresh basil"
              />
            </div>
            <div className="menuitem-vertical-flex-item">
              <MenuItemComponent
                className="menuItemComponent"
                imageUrl={fettuccineAlfredo}
                imageAlt="description of image"
                heading="Fettuccine Alfredo"
                price="$15"
                description="A creamy pasta dish made with fettuccine noodles and a sauce made with butter, heavy cream, and Parmesan cheese."
              />
            </div>
            <div className="menuitem-vertical-flex-item"></div>
          </div>
        </div>
        <div className="flex-item flex-item-3">
          <h1 className="headingMiddle">What our customers say</h1>
          <div className="customer-vertical-flex-container">
            <div className="customer-vertical-flex-item"></div>
            <div className="customer-vertical-flex-item">
              {" "}
              <CustomerFeedbackComponent
                imageUrl={man}
                name="Mike"
                feedback='"I absolutely loved the pasta at this restaurant! The sauce was flavorful and the noodles were cooked perfectly. I also appreciated the friendly service and cozy atmosphere. I will definitely be returning to this restaurant."'
              />
              <CustomerFeedbackComponent
                imageUrl={woman}
                name="Michelle"
                feedback='"I had the pleasure of dining at this Italian restaurant and was blown away by the food. The bruschetta was fresh and the pizza was cooked to perfection. The staff was also very attentive and made the experience even better. I highly recommend this restaurant to anyone looking for delicious Italian food."'
              />
            </div>

            <div className="customer-vertical-flex-item"></div>
          </div>
        </div>
        <div className="flex-item flex-item-4">
          <h1 className="headingMiddle">Who we are</h1>
          <div className="about-vertical-flex-container">
            <div className="about-vertical-flex-item"></div>
            <div className="about-vertical-flex-item">
              {" "}
              <p className="shortDescription">
                Welcome to Little Lemon, a cozy and charming restaurant
                featuring delicious Italian-inspired dishes. Our menu includes a
                variety of pasta, seafood, and meat dishes, as well as an
                extensive wine list. We also offer online ordering and
                reservations for your convenience. Come visit us and experience
                the taste of Italy at Little Lemon.
              </p>
            </div>
            <div className="about-vertical-flex-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
