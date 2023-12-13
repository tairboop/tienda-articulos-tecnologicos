import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img11.jpg'
import img2 from '../images/img22.jpg'
import img3 from '../images/img33.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Paquete Oferta 1</h3>
        <p className='pp'>Por solo 5000$</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 >Paquete Oferta 2</h3>
        <p className='pp'>Por solo 5000$</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Paquete Oferta 3</h3>
        <p className='pp'>
        Por solo 5000$
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage