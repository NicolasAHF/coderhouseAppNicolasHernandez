import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../Cart/CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './NavBar.module.css';

const NavBarComponent = () => {
  return (<>
    <Navbar bg="primary" expand="lg">
      <Container>
        <Nav.Link href="#home">
          <p className={classes.font}>Rosas Desserts</p>
        </Nav.Link>
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
              <NavDropdown.Item href="#categorias/1">Ver todo</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/2">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/3">Cupcakes</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/4">Postres</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/5">Meriendas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default NavBarComponent;
