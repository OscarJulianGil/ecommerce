import productoModel from "../../models/productoModel"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import { ApiConnectionServer } from "../../data/ApiConnectionServer";
import { useState } from "react";




export const ProductoCategoria = (props) => {

    const[productos,setProductos] = useState([]);

    //Importo el contexto
    const provider = useContext(DataContext);

    //Afecto el datacontext por medio del click del boton
    const adicionarProductoCarrito = (producto) => {
        provider.setCarrito([...provider.carrito,producto]);
    }

    const obtenerProductos = () => {
        let callApi = new ApiConnectionServer();
        const serverResponse = callApi.getData('/ecommerce/producto/' + props.categoria._id);
        serverResponse.then((data) => {
            return data.json();
        }).then((jsonresponse) =>{
            if(jsonresponse.code == 200){
                //this.setState({categorias : jsonresponse.data})
                setProductos(jsonresponse.data);
            }
            else{
                alert(jsonresponse.message);
            }
        }).catch((error) =>{
            alert("Error " + error);
        })
    }

    useEffect(() => {
        obtenerProductos();
    },[props.categoria._id]);

    //obtenerProductos();

    return (
        <div className="container">
            <div className="row mt-3">
                <h1>Productos de la categoria {props.categoria.nombre}</h1>
            </div>
            <div className="row mt-3">

            {
                productos.map((object,index) => {
                    return (
                        <div className="col">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={object.imagen.url} />
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