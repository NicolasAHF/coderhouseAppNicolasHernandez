import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    
    if (category) {
      const newConfig = query(productsCollection, where("category", "==", category));
      getDocs(newConfig)
      .then((res) => {
        const data = res.docs.map((doc) => {
          return {id: doc.id, ...doc.data()};
        });
        setFilteredProducts(data);
      })
      .catch((error) => console.log(error));
    } else {
      getDocs(productsCollection)
      .then((res) => {
        const data = res.docs.map((doc) => {
          return {id: doc.id, ...doc.data()};
        });
        setProducts(data);
      })
      .catch((error) => console.log(error));
    }
    
  };

  return (
    <div>
      <ItemList products={category ? filteredProducts : products} />
    </div>
  );
};

export default ItemListContainer;
