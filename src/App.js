
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './component/Navigationbar';
import CarouselPage from './paginas/CarouselPage'
import CardPage from './paginas/CardPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import Credit from './paginas/Creditos'
import Carrito from './paginas/cartContent/Carrito';
import Cabecera from './component/Cabecera';
import Footer from './component/Footer';

import DataProvider from './paginas/cartContent/DataContext';

function App() {
  return (
    <DataProvider>
    <HashRouter>
    <div className="App">
      <Cabecera/>

      <Navigationbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/paginas/carousel' element={<CarouselPage/>}></Route>
        <Route path='/paginas/card' element={<CardPage/>}></Route>
        <Route path='/paginas/credit' element={<Credit/>}></Route>
        <Route path='/paginas/cartContent/carrito' element={<Carrito/>}></Route>
        
      </Routes>
      <></>
      <Footer/>
    </div>
    </HashRouter>
    </DataProvider>
  );
}

export default App;
