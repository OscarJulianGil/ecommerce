import { Route, Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/Inicio/Inicio"
import { AdminCategorias } from "./components/AdminCategorias/AdminCategorias"
import { ProductoCategoria } from "./components/ProductoCategoria/ProductoCategoria"
import { Carrito } from "./components/Carrito/Carrito"
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras"

export const Ruteos = () =>{

    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/Vestuario" element={<ProductoCategoria />}></Route>
            <Route path="/Calzado" element={<AdminCategorias name="Calzado" id="20" />}></Route>
            <Route path="/Infantil" element={<AdminCategorias name="Infantil" id="30" />}></Route>
            <Route path="/MiCarrito" element={<CarritoCompras></CarritoCompras>}></Route>
        </Routes>
    )
}