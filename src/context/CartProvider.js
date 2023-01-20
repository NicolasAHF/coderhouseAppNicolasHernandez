import { useState } from "react";
import { cartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newProduct = {
      name: item.title,
      price: item.price,
      quantity: quantity,
      category: item.category,
    };
    setCart([...cart, newProduct]);
  };

  /*const removeItem = (id) => {
    
    setCart([...cart, newProduct]);
  };*/

  const clear = () =>{
    setCart([]);
  }

  return <cartContext.Provider value={{cart, addItem}}>{children}</cartContext.Provider>;
};

export default CartProvider;
