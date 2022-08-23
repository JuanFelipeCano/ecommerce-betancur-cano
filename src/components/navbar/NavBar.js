import logo from '../../logo.svg';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <img width={`100px`} src={logo} alt="logo" />
      
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <div>
        <button>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default NavBar;
