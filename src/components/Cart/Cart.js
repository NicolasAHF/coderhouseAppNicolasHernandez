import { cartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import ItemCart from "./ItemCart";
import Modal from "../modal/modal";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { totalPrice, totalQuantities, cart, clear, setShowCart } =
    useContext(cartContext);
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

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

  const validateFields = () => {
    if (
      email.trim().length === 0 ||
      emailConfirm.trim().length === 0 ||
      phone.trim().length === 0 ||
      name.trim().length === 0
    ) {
      setError("los campos no pueden ser vacios")
      setShowError(true);
      return;
    }
    if (email !== emailConfirm) {
      setError("los email no coinciden");
      setShowError(true);
      return;
    }
    if (!email.includes('@') && !email.includes('.')) {
      setError("ingrese un email valido");
      setShowError(true);
      return;
    }
    saveOrder();
  };

  const saveOrder = () => {
    setShowError(false);
    setError("");
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((response) => {
        setOrderId(response.id);
        setShowModal(true);
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
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              ></input>
              <input
                placeholder="Confirmar Email"
                type="email"
                onChange={(event) => {
                  setEmailConfirm(event.target.value);
                }}
                value={emailConfirm}
              ></input>
              <input
                placeholder="Telefono"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                value={phone}
                type="tel"
              ></input>
              <input
                placeholder="Nombre"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                type="text"
              ></input>
              {showError && <span className={classes.error}>{error}</span>}
            </form>
            <button onClick={validateFields} className={classes.btn} disabled={!email || !name || !emailConfirm || !phone}>
              Completar Compra
            </button>
            <button onClick={() => { clear(); setShowError(false) }} className={classes.btn}>
              Vaciar
            </button>
          </>
        )}
        <h5>Precio Total: ${totalPrice}</h5>
      </div>
      {showModal && (
        <Modal
          id={orderId}
          show={showModal}
          onClose={() => {
            setShowModal(false);
            setShowCart(false);
          }}
        />
      )}
    </>
  );
};

export default Cart;
