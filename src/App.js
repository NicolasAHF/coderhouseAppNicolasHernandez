import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import CarouselComponent from './components/Navigation/Carousel';
import NavBar from './components/Navigation/NavBar';
import './custom.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <NavBar/>
    <CarouselComponent />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="category/:id" element={<ItemListContainer />}/>
      <Route path="item/:id" element={<ItemListContainer />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
