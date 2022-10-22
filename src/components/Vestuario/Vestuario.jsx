import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Vestuario = () =>{

    const listadoVestuario = [
        {
            id: 1,
            name:"Camisa Polo",
            descripcion: "Camisa Polo de colores",
            precio: 100000,
            image:''
        },
        {
            id: 2,
            name:"Jeans",
            descripcion: "Jean azul, super bueno",
            precio: 150000,
            image:''
        },
        {
            id: 3,
            name:"Pantaloneta",
            descripcion: "Jean azul, super bueno",
            precio: 150000,
            image:''
        }
    ]


    return (
        <>
            {
                listadoVestuario.map((value,key) => {
                    return <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://falabella.scene7.com/is/image/FalabellaCO/882483592?wid=170&hei=170&qlt=70" />
                                <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                <Card.Text>
                                   {value.descripcion}
                                </Card.Text>
                                <Card.Text>
                                   $ {value.precio}
                                </Card.Text>
                                <Button variant="primary">
                                    Agregar al carrito
                                    <box-icon name='cart-add'></box-icon>
                                </Button>
                                </Card.Body>
                            </Card>
                })
            }
            
        </>
    )
}