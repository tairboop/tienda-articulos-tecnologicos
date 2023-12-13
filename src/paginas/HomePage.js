import React from 'react'

import Products from './products/Products';

function HomePage() {
  return (
    <div style={{ alignContent: 'center', marginTop: '20%', fontWeight: 'bold' }}>
      Bienvenido a la tienda online de productos tecnologicos, busque todo los aparatos tecnologicos
      de diferentes marcas y distribuidores
      <h1 style={{color: 'red', textAlign: 'center', marginTop: '20px'}}>Ofertas!</h1>
      <div className='product-card-container'>
        <Products />
      </div>
    </div>
  )
}

export default HomePage