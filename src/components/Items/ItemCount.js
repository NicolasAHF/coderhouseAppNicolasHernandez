import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const addToCart = () =>{
        console.log(count);
    };

    const addItems = () =>{
        setCount(count + 1);
    }

    const removeItems = () =>{
        if(count > 1){
            setCount(count - 1);
        }else{
            setCount(1);
        }

    }

    return (
        <>
        <InputGroup>
        <Button variant="outline-secondary" id="button-addon1" onClick={removeItems}>
          -
        </Button>
        <Form.Control
          value={count}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={addItems}>
          +
        </Button>
        <Button className="w-100" variant="primary" onClick={addToCart}>Agregar al carrito </Button>
      </InputGroup>
        </>
    );
};

export default ItemCount;