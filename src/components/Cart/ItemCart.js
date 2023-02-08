import classes from "./ItemCart.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemCart = ({ product }) => {
  const {cartProductsQty, removeItem } = useContext(cartContext);
  return (
    <div className={classes.items}>
      <img
        src={`/${product.pictureUrl}`}
        alt={product.title}
        className={classes.image}
      />
      <button className={classes.remove} onClick={() => removeItem(product.id)}>Remover producto</button>
      <p>{product.title}</p>
      <InputGroup>
        <Button variant="outline-secondary" id="button-addon1" onClick={() => cartProductsQty(product.id, "dec")}>
          -
        </Button>
        <Form.Control value={product.quantity} />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => cartProductsQty(product.id, "inc")}>
          +
        </Button>
      </InputGroup>
    </div>
  );
};

export default ItemCart;
