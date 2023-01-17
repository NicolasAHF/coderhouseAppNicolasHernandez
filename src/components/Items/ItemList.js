import Item from "./Item";
import classes from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
};

export default ItemList;
