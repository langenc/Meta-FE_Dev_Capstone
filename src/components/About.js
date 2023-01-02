import React from "react";
import restaurant from "../assets/restaurant.png";
import '../css/About.css'

function About() {
  return (
    <div>
      <div className="vertical-flex-container">
        <div className="vertical-flex-item vertical-flex-item-border"></div>
        <div className="vertical-flex-item vertical-flex-item-center">
        <h2>Welcome to Little Lemon</h2>
        <p>
        A cozy and charming restaurant featuring delicious Italian-inspired
        dishes. Our menu includes a variety of pasta, seafood, and meat dishes,
        as well as an extensive wine list. We also offer online ordering and
        reservations for your convenience. Come visit us and experience the
        taste of Italy at Little Lemon.
      </p>
      <h2>Our Story</h2>
      <p>
        Little Lemon was founded by husband and wife team, Mario and Sophia, who
        have a passion for Italian cuisine and a love for the warmth and
        hospitality of a traditional trattoria. Inspired by their travels to
        Italy and memories of family dinners, they set out to create a
        restaurant that would bring a taste of Italy to their community.
      </p>
      <p>
        Using only the freshest ingredients and traditional cooking techniques,
        Mario and Sophia have crafted a menu that is both authentic and diverse.
        From homemade pasta and wood-fired pizzas, to classic meat and fish
        dishes, there is something for everyone at Little Lemon.
      </p>
      <p>
        So come join us and be a part of the Little Lemon family. We can't wait
        to share our love for Italian food with you.
      </p>
        </div>
        <div className="vertical-flex-item vertical-flex-item-center">
            <img src={restaurant} className="restaurant" alt="restaurant" />
        </div>
        <div className="vertical-flex-item vertical-flex-item-border"></div>
      </div>

    </div>
  );
}

export default About;
