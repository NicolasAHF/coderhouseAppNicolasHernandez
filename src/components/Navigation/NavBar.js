import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../Cart/CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './NavBar.module.css';
import {Link} from "react-router-dom";

const NavBarComponent = (props) => {
  const cart = props.cart;
  
  return (<>
    <Navbar bg="primary" expand="lg">
      <Container>
        <Link to="/" style={{color:"black"}}>
          <p className={classes.font}>Rosas Desserts</p>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categorias"
            >
              <NavDropdown.Item><Link to="/category/:id">Ver todo</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/:id">Tortas</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category/:id">Tortas para eventos</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget cart={cart}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default NavBarComponent;