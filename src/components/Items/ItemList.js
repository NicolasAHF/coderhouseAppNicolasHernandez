import Item from "./Item";
import classes from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
