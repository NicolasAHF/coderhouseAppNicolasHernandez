import { cartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import ItemCart from "./ItemCart";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = (props) => {
  const { totalPrice, totalQuantities, cart, clear } = useContext(cartContext);

  const [order, setOrder] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setOrder({
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      products: cart.map((item) => {
        const { title, id, quantity, price } = item;
        return { title, id, quantity, price };
      }),
      total: totalPrice,
    });
  }, [name, email, phone]);

  const saveOrder = async () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(() => {
        alert("Tu compra se completo con éxito");
      })
      .catch((error) => console.log(error));
    clear();
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <>
      <div className={classes.cartContainer}>
        <div className={classes.header}>
          <h1>Carro</h1>
          <h5>({totalQuantities} productos)</h5>
          <div className={classes.items}>
            {cart.length >= 1 &&
              cart.map((product) => (
                <ItemCart key={product.id} product={product} />
              ))}
          </div>
          {cart.length < 1 && <p>Tu carro esta vacio</p>}
        </div>
        {cart.length >= 1 && (
          <>
            <form className={classes.form}>
              <input
                placeholder="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              ></input>
              <input
                placeholder="Telefono"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                value={phone}
              ></input>
              <input
                placeholder="Nombre"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              ></input>
            </form>
            <button onClick={saveOrder} className={classes.btn}>
              Completar Compra
            </button>
            <button onClick={() => clear()} className={classes.btn}>
              Vaciar
            </button>
          </>
        )}
        <h5>Precio Total: ${totalPrice}</h5>
      </div>
    </>
  );
};

export default Cart;
