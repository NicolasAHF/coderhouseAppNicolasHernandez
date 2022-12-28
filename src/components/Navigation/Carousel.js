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
          <h3>Contactenos para reservar sus tortas personalizadas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className={classes.carousel}>
        <img
          className={classes.image}
          src={dish}
          alt="Second slide"
        />
        <Carousel.Caption className={classes.text}>
          <h3>Visite nuestro local para probar las mejores meriendas y postres</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className={classes.carousel}>
        <img
          className={classes.image}
          src={colorful}
          alt="Third slide"
        />
        <Carousel.Caption className={classes.text}>
          <h3>Tambien contamos con diferentes tipos de cosas dulces como macarons, alfajores y mas</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;