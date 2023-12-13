import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import git from '../icons/git.svg';
import meta from '../logo.svg';


function Navigationbar() {
  return (
    <div>
      <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/" style={{ fontFamily: 'Oxygen' }}>
            <img src={meta} alt="logoreact" width="30" height="30" className="d-inline-block align-top" />
            Inicio</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='icons' style={{ justifyContent: 'end' }}>
            <Nav className="me-auto">
              <Nav.Link href="../paginas/carousel">Carousel</Nav.Link>
              <Nav.Link href="../paginas/card">Todos los productos</Nav.Link>
              <Nav.Link href="../paginas/credit">Creditos</Nav.Link>
            </Nav>
            <Nav style={{ gap: '0.5rem', alignItems: 'center' }}>
              <Nav.Link href="https://github.com/tairboop/">
                <img src={git} alt='git' ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar