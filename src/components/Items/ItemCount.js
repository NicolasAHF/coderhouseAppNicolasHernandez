import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./ItemCount.module.css";
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({product}) => {
  const { incQty, decQty, qty, onAdd } = useContext(cartContext);


  return (
    <>
      <div>
        <InputGroup>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={decQty}
          >
            -
          </Button>
          <Form.Control value={qty} />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={incQty}
          >
            +
          </Button>
        </InputGroup>
      </div>
      <Button
        className={classes.cart}
        variant="primary"
        onClick={() => onAdd(product, qty)}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
