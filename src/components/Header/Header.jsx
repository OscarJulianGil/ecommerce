import './Header.css';
import { Link } from 'react-router-dom';
import { AppCarousel } from '../AppCarousel/AppCarousel';
import { Carrito } from '../Carrito/Carrito';


export const Header = () => {

    const Titulo = "Mi tienda";

    const categorias = ["Vestuario","Calzado","Infantil"];

    return(
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{Titulo}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className='nav-link active' to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/nuevo">Nuevo Producto</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            {
              categorias.map((item) => {
                 return  <li><Link class="dropdown-item" to={item}>{item}</Link></li>
              })
            }
          </ul>
        </li>
      </ul>
      <Carrito></Carrito>
      <box-icon name='log-out'></box-icon>
    </div>
  </div>
</nav>

</>

    )
}