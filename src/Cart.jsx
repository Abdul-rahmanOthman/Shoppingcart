import React from "react";
import { useContext, useEffect, useRef, useState } from "react";

import "./App.css";
import "./Components/Cards.css";
import { Shoppingcon } from "./context/Shoppingcon";
const Cart = () => {
  const { cartitems } = useContext(Shoppingcon);
  const { setcartitems } = useContext(Shoppingcon);
  const { showcart } = useContext(Shoppingcon);

  return (
    <div className="cardoverlay">
      {showcart && (
        <>
          <div className="cart-drop"></div>
          <div className="cartcon">
            <h4>my bag:{cartitems.length}</h4>
            {cartitems.map((items) => (
              <div className="cards">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={items.image}
                    alt={items.title}
                    className="cartimg"
                  />
                  <div className="incdec">
                    <button
                      className="shape"
                      onClick={() =>
                        setcartitems((prev) =>
                          prev.map((prev) =>
                            prev.id === items.id
                              ? { ...prev, quantity: prev.quantity + 1 }
                              : prev
                          )
                        )
                      }
                    >
                      +
                    </button>
                    <h4>{items.quantity}</h4>

                    <button
                      className="shape"
                      onClick={() =>
                        setcartitems((prev) => {
                          const update = prev.map((dec) =>
                            dec.id === items.id
                              ? { ...dec, quantity: dec.quantity - 1 }
                              : dec
                          );
                          return update.filter((item) => item.quantity > 0);
                        })
                      }
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <h4>{items.title}</h4>

                    <p>{items.price}</p>
                    <h5>size</h5>

                    {items.size?.map?.((size) => (
                      <span className="sizestyle">{size}</span>
                    ))}

                    <h5>color</h5>
                    <div className="color-container">
                      {Array.isArray(items.color) &&
                        items.color.map((color) => (
                          <span
                            className="color-dot"
                            style={{ backgroundColor: color }}
                          ></span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="placeoreder"
              onClick={() => {
                localStorage.removeItem("cart");
                setcartitems([]);
                
              }}
            >
              place order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
