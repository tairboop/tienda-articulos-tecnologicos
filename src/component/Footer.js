import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import './style-footer.css';

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4}>
          <h5>Información de la empresa</h5>
          <ul>
            <li>
              <NavLink href="/">Acerca de nosotros</NavLink>
            </li>
            <li>
              <NavLink href="/">Contacto</NavLink>
            </li>
            <li>
              <NavLink href="/">Política de privacidad</NavLink>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Enlaces de interés</h5>
          <ul>
            <li>
              <NavLink href="/">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/">Soporte</NavLink>
            </li>
            <li>
              <NavLink href="/">Términos y condiciones</NavLink>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Redes sociales</h5>
          <ul>
            <li>
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-facebook-square"></i>facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-twitter-square"></i>twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-instagram"></i>instagram
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Copyright © 2023, Chimpokomonxd. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
