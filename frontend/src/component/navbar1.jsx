import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='pe-5 '><img height={50} src="https://www.golakshadweep.com/assets/new-theme/img/logo1.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ps-5 ms-5">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Packages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/package">package</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Lakshadweep" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="">Gol</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
          </Nav>
          <button className='btn btn-outline-primary me-3 rounded-5'>Login</button>
          <button className='btn btn-outline-primary rounded-5'>Sign Up</button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navbar1;