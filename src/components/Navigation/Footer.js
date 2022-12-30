import classes from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {


    return (
      <section className={classes.footer}>
        <section className={classes.footerLeft}>
            <section>Proyecto Coderhouse</section>
            <section>Nicolas Hernandez</section>
        </section>
        <section className={classes.footerCenter}>
            <section>rosasdesserts@example.com</section>
            <section>Terms and Conditions<br/>Copyright</section>
        </section>
        <section className={classes.footerRight}>
            <section>Social</section>
            <a href="https://www.instagram.com/rosas.desserts/" className={classes.instagram}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </section>
      </section>
    );
  };
  
  export default Footer;