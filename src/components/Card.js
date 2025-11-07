import React from "react";
import "./Card.css";

function Card({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          className="menu-item"
          key={item.id}
          data-test-id={`menu-item-${item.category}`}  // 👈 For Cypress tests
        >
          <img src={item.img} alt={item.title} />
          <div className="menu-content">
            <div className="menu-header">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
