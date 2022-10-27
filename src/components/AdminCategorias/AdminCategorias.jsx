import { Calzado } from "../Calzado/Calzado";
import { Vestuario } from "../Vestuario/Vestuario";
import { Infantil } from "../Infantil/Infantil";


export const AdminCategorias = (props) => {
    const nombreCategoria = props.name;

    if(nombreCategoria === "Vestuario"){
        return(
            <>
               <Vestuario></Vestuario>
            </>
        )
    }
    else if(nombreCategoria === "Calzado"){
        return(
            <>
               <Calzado></Calzado>
            </>
        )
    }
    else{
        return(
            <>
               <Infantil></Infantil>
            </>
        )
    }
}