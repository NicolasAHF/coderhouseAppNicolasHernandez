import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../Cart/CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";

const NavBarComponent = (props) => {
  const cart = props.cart;
  const { showCart } = useContext(cartContext);

  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Link to="/" className={classes.title}>
            <p className={classes.font}>Rosas Desserts</p>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.container}>
            <Nav className="me-auto">
              <Nav.Link><Link to="/" className={classes.title}>Home</Link></Nav.Link>
              <NavDropdown id="nav-dropdown-dark-example" title="Categorias">
                <NavDropdown.Item>
                  <Link to="category/cupcakes" className={classes.dropdown}>
                    Cupcakes
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="category/tortas" className={classes.dropdown}>
                    Tortas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="category/eventos" className={classes.dropdown}>
                    Tortas para eventos
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {showCart && <Cart className={classes.cart} />}
            <CartWidget cart={cart} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
