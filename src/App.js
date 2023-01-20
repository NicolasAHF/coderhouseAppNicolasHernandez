import "./App.css";
import ItemListContainer from "./components/Items/ItemListContainer";
import CarouselComponent from "./components/Navigation/Carousel";
import NavBar from "./components/Navigation/NavBar";
import "./custom.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarouselComponent />
                <ItemListContainer />
              </>
            }
          />
          <Route path="category/:category" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center" }}>404 La ruta no existe</h1>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
