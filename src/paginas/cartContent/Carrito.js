import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Carrito = () => {
  return (
    <div>
      facturacion:
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="../../images/fac2.jpg" rounded />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Carrito
