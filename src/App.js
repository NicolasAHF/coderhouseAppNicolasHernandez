import "./App.css";
import ItemListContainer from "./components/Items/ItemListContainer";
import CarouselComponent from "./components/Navigation/Carousel";
import NavBar from "./components/Navigation/NavBar";
import "./custom.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/Items/ItemDetail";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetail />} />
        <Route path="*" element={<h1 style={{textAlign:"center"}}>404 La ruta no existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
