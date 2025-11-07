import React from 'react'
import './Card.css';
function Card(props) {
  return (
    <>
      {props.items.map((item) => (
        <div className="menu-item" key={item.id}>
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
    </>
  );
}

export default Card

