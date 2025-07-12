import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoGato1.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <NavLink to="/">
          <img className="header-logo" src={logo} alt="Logo del sitio" />
        </NavLink>

        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Principal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">Acerca de</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin-product" className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">Registro</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <i className="fa-solid fa-cart-shopping icon-custom" />
        <i className="fa-solid fa-user icon-custom-2" />
      </div>
    </header>
  );
}
