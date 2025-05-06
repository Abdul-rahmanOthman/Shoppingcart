import { createContext, useState,useEffect } from "react";

export const Shoppingcon = createContext({});

const initialcartitems = localStorage.getItem("cartitems")
  ? JSON.parse(localStorage.getItem("cartitems"))
  : [];

const Shoppingconprovider = ({ children }) => {
  const [cartitems, setcartitems] = useState(initialcartitems);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  return (
    <Shoppingcon.Provider value={{ cartitems, setcartitems }}>
      {children}
    </Shoppingcon.Provider>
  );
};

export default Shoppingconprovider;
