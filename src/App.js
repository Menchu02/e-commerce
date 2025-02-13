import './App.css';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Carrito from './pages/Carrito/Carrito';
import Cuenta from './pages/Cuenta/Cuenta';
import Tienda from './pages/Tienda/Tienda';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import SingleProduct from './pages/SingleProduct/SingleProduct';
import Suscripcion from './pages/Suscripcion/Suscripcion';
import ThemeProvider, {
  useTheme,
} from './components/ThemeProvider/ThemeProvider';
import Rebajas from './pages/Rebajas/Rebajas';

function App() {
  const darkTheme = useTheme();
  const images = [
    {
      id: '1',
      title: 'Caballero',
      image:
        'https://www.fotografiaecommerce.com/wp-content/uploads/2020/01/sector-moda.jpg',
    },
    {
      id: '2',
      title: 'Mujer',
      image:
        'https://1.bp.blogspot.com/-tTDW6UBcnEs/XY_MrqdJP8I/AAAAAAABrec/CzqNEdfXUKwWdIAkQRFket9kvhOQ2SxvwCEwYBhgL/s1600/moda%2B%2Bverano%2B2020%2Bropa%2Bde%2Bmujer%2Bmoda%2B2020%2Bprecios.jpg',
    },
    {
      id: '3',
      title: 'Calzado',
      image:
        'https://www.podoactiva.com/wp-content/uploads/imagenes/blog_35.jpg',
    },
    {
      id: '4',
      title: 'Accesorios',
      image:
        'https://pro2-bar-s3-cdn-cf6.myportfolio.com/7fbe1ae6-8850-493c-a72e-3b59ed382e9a/756a0654-3886-4fef-bef8-83ad2bd704ff_rw_1920.jpg?h=2f6e9bd9fd96f9ff5ccabd8d987f385b',
    },
    {
      id: '5',
      title: 'Tecnología',
      image:
        'https://www.diariosigloxxi.com/multimedia/images/img_253c804bac651a58815af53d0d09dde4.jpg',
    },
  ];
  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home images={images} />}></Route>
          <Route path='Cuenta' element={<Cuenta />}></Route>
          <Route path='Tienda' element={<Tienda />}></Route>
          <Route path='Suscripcion' element={<Suscripcion />}></Route>
          {/* <Route path="Rebajas" element={<Rebajas />}></Route> */}
          <Route path='Rebajas' element={<Rebajas />}></Route>
          <Route path='Carrito' element={<Carrito />}></Route>

          <Route path='singleProduct/:postId' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
