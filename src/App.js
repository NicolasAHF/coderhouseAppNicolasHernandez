import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import CarouselComponent from './components/Navigation/Carousel';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
import './custom.scss';

function App() {
  return (<>
    <NavBar />
    <CarouselComponent />
    <ItemListContainer greetings="Bienvenido a Rosas Desserts"/>
    <Footer />
  </>
  );
}

export default App;
