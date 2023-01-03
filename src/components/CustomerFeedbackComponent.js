import React from 'react';
import '../css/CustomerFeedbackComponent.css'

function CustomerFeedbackComponent({ imageUrl, name, feedback }) {
  return (
    <div className="customer-feedback">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="image" />
      </div>
      <h3 className="name">{name}</h3>
      <p className="feedback">{feedback}</p>
    </div>
  );
}

export default CustomerFeedbackComponent;
