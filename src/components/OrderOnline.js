import React from "react";
import "../css/OrderOnline.css";
import MenuItemComponent from "./MenuItemComponent";
import fettuccineAlfredo from "../assets/fettuccine_alfredo.png";
import spaghetti from "../assets/Spaghetti.png";
import pizza from "../assets/pizza.png";

function OrderOnline() {
  return (
    <div className="menu-flex-container">
      <h1 className="headingMiddle">Our Menu</h1>
      <div className="menu-hor-flex-item">
        <div className="menu-vertical-flex-container">
          <div className="menu-vertical-flex-item"></div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              imageUrl={spaghetti}
              imageAlt="description of image"
              heading="Spaghetti Bolognese"
              price="$12"
              description="A classic Italian dish made with spaghetti noodles and a meat sauce made with ground beef, tomato sauce, and vegetables."
            />
          </div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              imageUrl={pizza}
              imageAlt="description of image"
              heading="Margherita Pizza"
              price="$10"
              description="A simple pizza topped with tomato sauce, mozzarella cheese, and fresh basil"
            />
          </div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              className="menuItemComponent"
              imageUrl={fettuccineAlfredo}
              imageAlt="description of image"
              heading="Fettuccine Alfredo"
              price="$15"
              description="A creamy pasta dish made with fettuccine noodles and a sauce made with butter, heavy cream, and Parmesan cheese."
            />
          </div>
          <div className="menu-vertical-flex-item"></div>
        </div>
      </div>
      <div className="menu-hor-flex-item">
        <div className="menu-vertical-flex-container">
          <div className="menu-vertical-flex-item"></div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              imageUrl={spaghetti}
              imageAlt="description of image"
              heading="Lasagna Napoletana"
              price="$18"
              description="Layers of pasta, ground beef, and cheese, baked with a rich tomato sauce"
            />
          </div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              imageUrl={pizza}
              imageAlt="description of image"
              heading="Pollo alla Parmigiana"
              price="$20"
              description="Breaded chicken breast topped with marinara sauce, mozzarella, and parmesan cheese, served with spaghetti"
            />
          </div>
          <div className="menu-vertical-flex-item">
            <MenuItemComponent
              className="menuItemComponent"
              imageUrl={fettuccineAlfredo}
              imageAlt="description of image"
              heading="Vitello alla Marsala"
              price="$25"
              description="Sauteed veal medallions in a marsala wine and mushroom sauce, served with roasted potatoes and vegetables"
            />
          </div>
          <div className="menu-vertical-flex-item"></div>
        </div>

        <div className="menu-hor-flex-item">
          <div className="menu-vertical-flex-container">
            <div className="menu-vertical-flex-item"></div>
            <div className="menu-vertical-flex-item">
              <MenuItemComponent
                imageUrl={spaghetti}
                imageAlt="description of image"
                heading="Risotto alla Milanese"
                price="$17"
                description="Arborio rice cooked in a saffron broth, served with shaved parmesan cheese"
              />
            </div>
            <div className="menu-vertical-flex-item">
              <MenuItemComponent
                imageUrl={pizza}
                imageAlt="description of image"
                heading="Calamari Fritti"
                price="$12"
                description=" Fried calamari served with a lemon aioli"
              />
            </div>
            <div className="menu-vertical-flex-item">
              <MenuItemComponent
                className="menuItemComponent"
                imageUrl={fettuccineAlfredo}
                imageAlt="description of image"
                heading="Insalata Caprese"
                price="$10"
                description="Fresh mozzarella, tomato, and basil salad, drizzled with olive oil and balsamic vinegar"
              />
            </div>
            <div className="menu-vertical-flex-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOnline;
