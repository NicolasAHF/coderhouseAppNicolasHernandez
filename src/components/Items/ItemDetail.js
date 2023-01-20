import classes from "./ItemDetail.module.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
  

  return (
    <>
      <div className={classes.details}>
        <div className={classes.img}>
          <img src={product.pictureUrl} alt={product.title} />
        </div>
        <div className={classes.box}>
          <div className={classes.row}>
            <h2>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
          </div>
          <ItemCount product={product}/>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
