import React from "react";
import "./Cards.css";
import Button from "./Button";

const Cards = ({setcartitems}) => {
  const blocks = [
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
    { image: "/plane.png", title: "name", desc: "njfnjskd", price: "50" },
  ];

  return (
    <div className="cards-con">
      {blocks.map((block) => (
        <div className="cards">
          <img src={block.image} alt={block.title} className="card-img" />
          <h4 className="text">{block.title}</h4>
          {/* <p className="text">{block.desc}</p> */}
          <p className="text">{block.price}</p>
          <Button setcartitems={setcartitems} block={block}/>
        </div>
      ))}
    </div>
  );
};

export default Cards;
