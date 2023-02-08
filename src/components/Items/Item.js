import Card from "react-bootstrap/Card";
import classes from "./Item.module.css";
import { Link} from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card className={classes.item}>
      <Link key={product.id} to={`/item/${product.id}`} state={{data: product}}>
        <Card.Img
          variant="top"
          src={`/${product.pictureUrl}`}
          alt={product.name}
          className={classes.image}
        />
      </Link>
      <Card.Body classes={classes.body}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p>${product.price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
