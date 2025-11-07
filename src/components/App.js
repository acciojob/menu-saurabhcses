import React, { useState } from "react";
import Card from "./Card";

const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    img: "images/item-1.jpeg",
    desc: "I'm baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: "$13.99",
    img: "images/item-2.jpeg",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    img: "images/item-3.jpeg",
    desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: "$20.99",
    img: "images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin milkshake truffaut.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: "$22.99",
    img: "images/item-5.jpeg",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$18.99",
    img: "images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
  },
];

function App() {
  const [items, setItems] = useState(menu);

  const allItem = () => setItems(menu);
  const breakfast = () => setItems(menu.filter(item => item.category === "breakfast"));
  const lunch = () => setItems(menu.filter(item => item.category === "lunch"));
  const shakes = () => setItems(menu.filter(item => item.category === "shakes"));

  return (
    <div id="main" className="menu">
      <h1>Our Menu</h1>
      <div className="btn-group">
        <button id="filter-btn-0" onClick={allItem}>All</button>
        <button id="filter-btn-1" onClick={breakfast}>Breakfast</button>
        <button id="filter-btn-2" onClick={lunch}>Lunch</button>
        <button id="filter-btn-3" onClick={shakes}>Shakes</button>
      </div>
      <Card items={items} />
    </div>
  );
}

export default App;
