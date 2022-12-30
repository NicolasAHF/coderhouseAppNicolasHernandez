import Carousel from 'react-bootstrap/Carousel';
import cake from '../../assets/cakes.jpg';
import dish from '../../assets/dish.jpg';
import colorful from '../../assets/colorful.jpg';
import classes from './Carousel.module.css';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item  className={classes.carousel}>
        <img
          className={classes.image}
          src={cake}
          alt="First slide"
        />
        <Carousel.Caption className={classes.text}>
          <button className={classes.button}>
          <h1>Satisfacer tu antojo dulce con los postres de Rosa</h1>
          <h3>Postres caseros con amor</h3>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className={classes.carousel}>
        <img
          className={classes.image}
          src={dish}
          alt="Second slide"
        />
        <Carousel.Caption className={classes.text}>
          <button className={classes.button}><h1>Los mejores pasteles y dulces caseros de Rosa's Desserts</h1></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className={classes.carousel}>
        <img
          className={classes.image}
          src={colorful}
          alt="Third slide"
        />
        <Carousel.Caption className={classes.text}>
          <button className={classes.button}><h1>Comience a hacer su pedido ahora</h1></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;