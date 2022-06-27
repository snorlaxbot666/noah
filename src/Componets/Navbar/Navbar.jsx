import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container , NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import CartIcon from '../CartWidget/CartWidget'



const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
  <Container fluid>
    
    <Navbar.Brand href="/">Todo para tus uñas</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="#action2">Catalogo</Nav.Link>
        <NavDropdown title=" Nuestros productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/categoryId/ipa">PRODUCTOS ACRILICO</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/wipa">PRODUCTOS GEL Y SEMIPERMANENTE</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/especial">PRODUCTOS ACRIGEL</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/hemp">CURSOS PRESENCIALES</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/apa">CURSOS ONLINE</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link href="/" Enable>
          Sobre Nosotros
        </Nav.Link>
        <CartIcon className="cart-widget__icon" />
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
                    

    )
}

export default NavBar
