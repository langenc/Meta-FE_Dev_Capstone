import React from 'react';
import '../css/MenuItemComponent.css'

const MenuItemComponent = (props) => {
  return (
    <div className="product-card">
      <img src={props.imageUrl} alt={props.imageAlt} style={{ width: '100%' }} />
      <h1>{props.heading}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <button>Order Online + $1</button>
    </div>
  );
}

export default MenuItemComponent;