import React, { useContext } from "react";
import "./Cards.css";
import Button from "./Button";

const Cards = () => {
  const blocks = [
    {
      id: "1",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 0,
    },
    {
      id: "2",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
    {
      id: "3",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
    {
      id: "4",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
    {
      id: "5",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
    {
      id: "6",
      image: "/plane.png",
      title: "samer",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
    {
      id: "7",
      image: "/plane.png",
      title: "name",
      desc: "njfnjskd",
      price: "50",
      size: ["XS", "S", "M", "L"],
      color: ["#a1e3c1", "#000000", "#004d4d"],
      avail: 20,
    },
  ];

  return (
    <div className="cards-con">
      {blocks.map((block) => (
        <div className={`cards ${block.avail ? "" : "out-of-stock"}`}>
          <img src={block.image} alt={block.title} className="card-img" />
          <h4 className="text">{block.title}</h4>
          {/* <p className="text">{block.desc}</p> */}
          <p className="text">{block.price}</p>
          <Button block={block} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
