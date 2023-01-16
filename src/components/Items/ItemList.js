import Item from "./Item";
import classes from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Link key={product.id} to={`item/${product.id}`}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
