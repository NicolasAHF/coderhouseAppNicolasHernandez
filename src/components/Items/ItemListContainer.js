import carrot from "../../assets/carrot.jpg";
import cupcake from "../../assets/cupcake.jpg";
import order from "../../assets/order.jpg";
import chocolate from "../../assets/chocolate.jpg";
import birthday from "../../assets/birthday.jpg";
import cheesecake from "../../assets/cheesecake.jpg";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: 1,
    title: "Carrot Cake",
    description: "Torta de zanahoria casera",
    price: "150",
    pictureUrl: carrot,
    category: "tortas",
  },
  {
    id: 2,
    title: "Torta de chocolate",
    description: "Torta de chocolate casera rellena de dulce de leche",
    price: "180",
    pictureUrl: chocolate,
    category: "tortas",
  },
  {
    id: 3,
    title: "Torta de cumpleaños",
    description: "Torta de cumpleaños con merenge y relleno a eleccion",
    price: "180",
    pictureUrl: birthday,
    category: "eventos",
  },
  {
    id: 4,
    title: "Cheese cake",
    description: "Cheese cake de maracuya o de frutos rojos",
    price: "200",
    pictureUrl: cheesecake,
    category: "tortas",
  },
  {
    id: 5,
    title: "Tortas a pedido",
    description: "Te hacemos una torta con las caracteristicas que mas te gusten para cualquier evento",
    price: "250",
    pictureUrl: order,
    category: "eventos",
  },
  {
    id: 6,
    title: "Cupcake",
    description: "Cupcakes rellenos de chocolate con baño de chocolate blanco",
    price: "100",
    pictureUrl: cupcake,
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
        console.log(filtered);
        setFilteredProducts(filtered);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div>
      <ItemList products={category ? filteredProducts : products} />
    </div>
  );
};

export default ItemListContainer;
