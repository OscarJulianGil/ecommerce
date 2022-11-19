import { useContext, useState } from "react"
import { DataContext } from "../../Context/DataProvider"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";

export const CarritoCompras = () => {

    const provider = useContext(DataContext);
    var itemSubtotal= 0;

    const [subtotal,setSubTotal] = useState(0);
    const [iva,setIva] = useState(0);
    const [total,setTotal] = useState(0);

    if(provider.carrito.length <= 0){
        return(
            <div class="alert alert-warning" role="alert">
                Aun no tiene elementos en el carrito de compras.
            </div>
        )
    }

    provider.carrito.map((object,index) => {
        var item = subtotal;
        console.log(itemSubtotal = itemSubtotal + object.precio);
        //setSubTotal(item =  item + object.precio)
    })

    function createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "2.00",
              },
            },
          ],
        });
      }
    
      function onApprove(data, actions) {
        console.log(data);
        const paymentID = data.paymentID;
        const orderID = data.orderID;
        const payerID = data.payerID;
        console.log("Id de pago: " + paymentID);
        console.log("Id de la orden: " + orderID);
        console.log("id del pagador" + data.payerID);

      }

    //setSubTotal(itemSubtotal);

    return(
       <div className="continer">
        <div className="row mt-2">
            <div className="col">
                <h1>Mi carrito de compras</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       provider.carrito.map((object,index) => {
                            return <tr>
                                        <td>{object.id}</td>
                                        <td>{object.nombre}</td>
                                        <td>${object.precio}</td>
                                        <td><button className="btn btn-primary">+</button>
                                                <input value={1} type="text"></input>
                                            <button className="btn btn-danger">-</button></td>
                                        <td><box-icon name="trash"></box-icon></td>
                                    </tr>
                       }) 
                   }
                </tbody>
            </Table>
            </div>
            <div className="col-6 align-middle">
                <div className="card align-middle" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Resumen de su compra</h5>
                        <div className="row">
                            <div className="col-6">SubTotal:</div>
                            <div className="col-6">{subtotal}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">IVA:</div>
                            <div className="col-6">{iva}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Total:</div>
                            <div className="col-6">{total}</div>
                        </div>
                        <hr></hr>
                        <Link className="btn btn-success" to="/Checkout">Pagar contraentrega!</Link>
                        <br/>
                        <br/>
                        <br/>
                        <PayPalScriptProvider options={{ "client-id": "AS4pp2Y6Fal9GV5Ch2ewwT5YsOwcveB2qlbKOkvG8V3mZY6pf2nqBVbIU6L9dixHJYA-Nse6b8B26097",currency:"USD" }}>
                            <PayPalButtons
                                style={{ color: "blue", shape: "pill", label: "pay", height: 40 }}
                                createOrder={(data, actions) => createOrder(data, actions)}
                                onApprove={(data, actions) => onApprove(data, actions)}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}