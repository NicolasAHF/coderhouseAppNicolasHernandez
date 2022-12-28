import classes from './itemListContainer.module.css'


const ItemListContainer = (props) => {
    return (
        <p className={classes.greetings}>{props.greetings}</p>
    );
};

export default ItemListContainer;