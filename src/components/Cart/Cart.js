import { cartContext } from "../../context/CartContext";
import { useContext, useRef, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import ItemCart from "./ItemCart";
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const Cart = (props) => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cart, clear } = useContext(cartContext);
  const [ order, setOrder ] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  /*useEffect(() => {
    setOrder({
      buyer: {
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        
      },
      products: cart,
      total: totalPrice
    });
  }, [emailRef, nameRef, phoneRef, cart, totalPrice])*/

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    console.log(emailRef.current.value)
    setOrder({
      buyer: {
        email: emailRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        
      },
      products: cart,
      total: totalPrice
    });
    console.log(order)
    addDoc(ordersCollection, order).then(() => {
      alert('Tu compra se completo con éxito')
    }).catch(error => console.log(error));
  }

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
        <div>
          <input placeholder="email" ref={emailRef}></input>
          <input placeholder="phone" ref={phoneRef}></input>
          <input placeholder="name" ref={nameRef}></input>
        </div>
        <button onClick={createOrder}>Completar Compra</button>
        <button onClick={() => clear()}>Vaciar</button>
      </div>
    </>
  );
};

export default Cart;
