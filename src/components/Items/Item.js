import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import classes from "./Item.module.css";
import { useParams } from "react-router-dom";

const Item = ({ product }) => {
  const { id } = useParams();

  return (
    <Card className={classes.item}>
        <Card.Img
          variant="top"
          src={product.pictureUrl}
          alt={product.name}
          className={classes.image}
        />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Card.Text>
        <ItemCount />
      </Card.Body>
    </Card>
  );
};

export default Item;
