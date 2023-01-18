import { useParams } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const {id} = useParams();

  return <h1>{id}</h1>;
};

export default ItemDetail;
