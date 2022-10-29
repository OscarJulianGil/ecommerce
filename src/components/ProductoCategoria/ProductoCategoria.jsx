import productoModel from "../../models/productoModel"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";




export const ProductoCategoria = (props) => {

    var productos = productoModel();

    //Importo el contexto
    const provider = useContext(DataContext);

    //Afecto el datacontext por medio del click del boton
    const adicionarProductoCarrito = (producto) => {
        provider.setCarrito([...provider.carrito,producto]);
    }

    const productosCategoria = productos.filter(x => x.categoriaid == props.categoria.id);

    return (
        <div className="container">
            <div className="row mt-3">
                <h1>Productos de la categoria {props.categoria.nombre}</h1>
            </div>
            <div className="row mt-3">

            {
                productosCategoria.map((object,index) => {
                    return (
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={object.imagen} />
                                <Card.Body>
                                <Card.Title>{object.nombre}</Card.Title>
                                <Card.Text>
                                    {object.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    $ {object.precio}
                                </Card.Text>
                                <Button onClick={() => {
                                    adicionarProductoCarrito(object)
                                }} variant="primary">Agregar al carrito</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
            </div>
        </div>
       
      );
    

}