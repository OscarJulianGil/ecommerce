import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import categoriaModel from "../../models/categoriaModel"
import { AppCarousel } from "../AppCarousel/AppCarousel"
import { Categoria } from "../Categoria/Categoria";


export const Inicio = () =>{

   var categorias = categoriaModel();

    return(
      <>
        <AppCarousel></AppCarousel>
        <div className="container">
          <div className="row">
              {
                categorias.map((object,index) => {
                      return <Categoria key={index} info={object}></Categoria>
                  })
              }
          </div>
        </div>
      </>
    )
}