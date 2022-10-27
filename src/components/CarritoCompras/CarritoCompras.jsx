import { useContext } from "react"
import { DataContext } from "../../Context/DataProvider"
import Table from 'react-bootstrap/Table';



export const CarritoCompras = () => {

    const provider = useContext(DataContext);

    if(provider.carrito.length <= 0){
        return(
            <div class="alert alert-warning" role="alert">
                Aun no tiene elementos en el carrito de compras.
            </div>
        )
    }

    return(
       <div className="continer">
        <div className="row">
            <div className="col">
                <h1>Mi carrito de compras</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-12">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       provider.carrito.map((object,index) => {
                            return <tr>
                                        <td>{object.id}</td>
                                        <td>{object.nombre}</td>
                                        <td>{object.precio}</td>
                                        <td>1</td>
                                    </tr>
                       }) 
                   }
                </tbody>
            </Table>
            </div>
        </div>
       </div>
    )
}