import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import classes from "./ItemCount.module.css";
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({product}) => {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(cartContext);

  const addToCart = () => {
    console.log(count);
  };

  const addItems = () => {
    setCount(count + 1);
  };

  const removeItems = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <>
      <div>
        <InputGroup>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={removeItems}
          >
            -
          </Button>
          <Form.Control value={count} />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={addItems}
          >
            +
          </Button>
        </InputGroup>
      </div>
      <Button
        className={classes.cart}
        variant="primary"
        onClick={() => addItem(product, count)}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
