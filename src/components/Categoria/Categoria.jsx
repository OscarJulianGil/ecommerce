import './Categoria.css';
import { Link } from "react-router-dom"



export const Categoria = (props)=> {

    return(
        <div className="col mt-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.info.imagen.url}   className="card-img-top imgcategoria" alt="..." /> 
                <div className="card-body">
                    <h5 className="card-title">{props.info.nombre}</h5>
                    <p className="card-text">{props.info.descripcion}</p>
                    <Link className="btn btn-primary" to={props.info.nombre}>COMPRA AHORA!</Link>
                </div>
            </div>
        </div>
    )
}