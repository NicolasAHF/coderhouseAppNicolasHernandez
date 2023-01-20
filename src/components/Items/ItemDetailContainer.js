import ItemDetail from './ItemDetail'
import { useLocation } from "react-router-dom";

const ItemDetailContainer = () => {
    const location = useLocation();
    const product = location.state.data;

    return (
      <div>
        <ItemDetail product={product} />
      </div>
    );
  };
  
  export default ItemDetailContainer;