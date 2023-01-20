import classes from './Bubble.module.css';
import {useContext} from 'react';
import { cartContext } from '../../context/CartContext';

const Bubble = (props) => {
    const {cart} = useContext(cartContext);

    const cartQuantity = () =>{

    };

    return (
        <span className={classes.bubble}>
            {cart.length !== 0 ? cart.quantity: 0}
        </span>
    );
};

export default Bubble;