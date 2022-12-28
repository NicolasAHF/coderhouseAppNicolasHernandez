import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import CarouselComponent from './components/Navigation/Carousel';
import NavBar from './components/Navigation/NavBar';
import './custom.scss';

function App() {
  return (<>
    <NavBar />
    <CarouselComponent />
    <ItemListContainer greetings="Bienvenido a Rosas Desserts"/>
  </>
    
  );
}

export default App;
