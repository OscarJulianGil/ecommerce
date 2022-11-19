import { Component } from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { ApiConnectionServer } from "../../data/ApiConnectionServer";
import categoriaModel from "../../models/categoriaModel"
import { AppCarousel } from "../AppCarousel/AppCarousel"
import { Categoria } from "../Categoria/Categoria";


export class Inicio  extends Component{


  constructor(props){
    super(props);

  }
   render(){
    return(
      <>
        <AppCarousel></AppCarousel>
        <div className="container">
          <div className="row">
              {
                this.props.categorias.map((object,index) => {
                      return <Categoria key={index} info={object}></Categoria>
                  })
              }
          </div>
        </div>
      </>
    )
  }
}