import { useState } from "react";
import { cartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const cartProductsQty = (id, value) => {
    foundProduct = cart.find((product) => product.id === id);
    index = cart.findIndex((product) => product.id === id);
    const newCart = cart.filter(product => product.id !== id);
    if (value === "inc") {
      setCart([
        ...newCart,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCart([
          ...newCart,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty > 0) {
        prevQty = prevQty - 1;
      } else {
        return 1;
      }
      return prevQty;
    });
  };

  const onAdd = (product, quantity) => {
    const inCart = cart.find((item) => item.id === product.id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (inCart) {
      const updateCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCart(updateCart);
    } else {
      product.quantity = quantity;

      setCart([...cart, { ...product }]);
    }
    setQty(1);
  };

  const removeItem = (id) => {
    foundProduct = cart.find(product => product.id === id)
    const newCart = cart.filter(product => product.id !== id);
    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        onAdd,
        showCart,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        setShowCart,
        clear,
        cartProductsQty,
        removeItem
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
