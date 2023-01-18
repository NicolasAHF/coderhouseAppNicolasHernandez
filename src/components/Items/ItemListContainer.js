import carrot from "../../assets/carrot.jpg";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: 1,
    title: "Carrot Cake",
    description: "Torta de zanahoria casera",
    price: "$150",
    pictureUrl: carrot,
    category: "tortas",
  },
  {
    id: 2,
    title: "Torta de chocolate",
    description: "Torta de chocolate casera rellena de dulce de leche",
    price: "$180",
    pictureUrl: carrot,
    category: "tortas",
  },
  {
    id: 3,
    title: "Torta de cumpleaños",
    description: "Torta de cumpleaños con merenge y relleno a eleccion",
    price: "$180",
    pictureUrl: carrot,
    category: "tortas",
  },
  {
    id: 4,
    title: "Cheese cake",
    description: "Cheese cake de maracuya o de frutos rojos",
    price: "$200",
    pictureUrl: carrot,
    category: "tortas",
  },
  {
    id: 5,
    title: "Tortas a pedido",
    description: "Cheese cake de maracuya o de frutos rojos",
    price: "$250",
    pictureUrl: carrot,
    category: "eventos",
  },
  {
    id: 6,
    title: "Cupcake",
    description: "Cheese cake de maracuya o de frutos rojos",
    price: "$100",
    pictureUrl: carrot,
    category: "cupcakes",
  },
];

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsArr);
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        setProducts(response);
        const filtered = response.filter(
          (product) => product.category === category
        );
        setFilteredProducts(filtered);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList products={category ? filteredProducts : products} />
    </div>
  );
};

export default ItemListContainer;
