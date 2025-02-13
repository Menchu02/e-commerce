import { Link } from 'react-router-dom';
import { useTheme, useUpdateTheme } from '../ThemeProvider/ThemeProvider';

export default function NavBar() {
  const toggleTheme = useUpdateTheme();
  const darkTheme = useTheme();
  return (
    <div>
      <nav className='nav-bar'>
        <Link className='none' to='/'>
          <li>Homeee</li>
        </Link>
        <Link className='none' to='Tienda'>
          <li>Tienda</li>
        </Link>
        <Link className='none' to='Suscripcion'>
          <li>Suscripción</li>
        </Link>
        <Link className='none' to='Cuenta'>
          <li>Cuenta</li>
        </Link>

        <Link className='none' to='Rebajas'>
          <li>Rebajas</li>
        </Link>

        <Link className='none' to='carrito'>
          <li>Carrito</li>
        </Link>

        <button className='nav-bar-button' onClick={toggleTheme}>
          {darkTheme ? ' Light' : ' Dark'}
        </button>
      </nav>
    </div>
  );
}
