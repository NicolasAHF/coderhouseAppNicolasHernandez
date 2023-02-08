import { cartContext } from "../../context/CartContext";
import { useContext, useRef } from "react";
import classes from "./Cart.module.css";
import ItemCart from "./ItemCart";

const Cart = (props) => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cart, clear } = useContext(cartContext);

  return (
    <>
      <div className={classes.cartContainer} ref={cartRef}>
        <div className={classes.header}>
          <h1>Carro</h1>
          <h5>({totalQuantities} productos)</h5>
          <div className={classes.items}>
            {cart.length >= 1 &&
              cart.map((product) => (
                <ItemCart key={product.id} product={product} />
              ))}
            <h5>Precio Total: ${totalPrice}</h5>
          </div>
          {cart.length < 1 && <p>Tu carro esta vacio</p>}
        </div>
        <button>Completar Compra</button>
        <button onClick={() => clear()}>Vaciar</button>
      </div>
    </>
  );
};

export default Cart;
