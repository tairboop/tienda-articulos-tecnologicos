import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import logo from '../images/logo.png';


const Cabecera = () => {
    return (
        <div>
            <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand href="/" style={{ fontFamily: 'Oxygen' }}>
                        <img src={logo} width="65" height="35" className="d-inline-block align-top" />
                        Electronic Center</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='icons' style={{ justifyContent: 'end' }}>
                        <Nav style={{ gap: '0.5rem', alignItems: 'center' }}>
                            <Nav.Link href="../paginas/carousel"><Button variant="outline-primary">login</Button>{' '}</Nav.Link>
                            <Nav.Link href="../paginas/cartContent/carrito"><Button variant="outline-success">Carrito</Button>{' '}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Cabecera
