import { useContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Components/Cards.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Form from "./Components/Form";
import Test from "./Components/Test";
import { Shoppingcon } from "./context/Shoppingcon";

function App() {
  const [fdata, setfdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const { cartitems } = useContext(Shoppingcon);
  const [showcart, setshowcart] = useState(false);
  const shut = useRef(true);

  useEffect(() => {
    const Getdata = async () => {
      try {
        setisloading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();

        setfdata(data);
        setisloading(false);
        if (shut.current) {
          console.log("hi");
          shut.current = false;
        }
      } catch (error) {
        console.log("ops!!", error);
      }
    };
    Getdata();
  }, []);

  return (
    <>
      {isloading && <p>loading.....</p>}
      <Navbar setshowcart={setshowcart} showcart={showcart} />
      <h1>women</h1>

      <Cards />
      <Form />

      <div className="cardoverlay">
        {showcart && (
          <div className="cartcon">
            <h4>my bag:{cartitems.length}</h4>
            {cartitems.map((items) => (
              <div className="cards">
                <img src={items.image} alt={items.title} className="card-img" />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4>{items.title}</h4>
                  <button>+</button>
                </div>
                <p>{items.price}</p>
                <div className="color-container">
                  {Array.isArray(items.color) &&
                    items.color.map((color) => (
                      <button
                        className="color-dot"
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  <button>-</button>
                </div>
                <div>
                  {items.size.map((size) => (
                    <button>{size}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!isloading && fdata && <Test item={fdata} />}
    </>
  );
}

export default App;
