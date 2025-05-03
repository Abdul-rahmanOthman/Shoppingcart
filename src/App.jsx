import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Components/Cards.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Form from "./Components/Form";
import Test from "./Components/Test";

function App() {
  const [fdata, setfdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const initialcartitems = localStorage.getItem("cartitems")
    ? JSON.parse(localStorage.getItem("cartitems"))
    : [];
  const [cartitems, setcartitems] = useState(initialcartitems);

  const shut = useRef(true);

  useEffect(()=>{
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
  },[cartitems]);

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
      <Navbar />
      <h1>women</h1>

      <Cards setcartitems={setcartitems} />
      <Form />
      {/* {JSON.stringify(fdata)} */}
      <h1>#cartitems {cartitems.length}</h1>
      <div className="cards-con">
        {cartitems.map((items) => (
          <div className="cards">
            <img src={items.image} alt={items.title} className="card-img" />
            <h4>{items.title}</h4>
            <p>{items.price}</p>
          </div>
        ))}
      </div>

      {!isloading && fdata && <Test item={fdata} />}
    </>
  );
}

export default App;