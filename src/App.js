import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { AppCarousel } from './components/AppCarousel/AppCarousel';
import { BrowserRouter } from 'react-router-dom';
import { Ruteos } from './Ruteos';
import { DataProvider } from './Context/DataProvider';
import { Component } from 'react';
import { ApiConnectionServer } from './data/ApiConnectionServer';


export class App extends Component {

  state = {
    categorias:[],
    isLoading: false
  };

  constructor(props){
    super(props);
  }

  getCategorias(){
    let callApi = new ApiConnectionServer();
    const serverResponse = callApi.getData('/ecommerce/categoria/getall');
    serverResponse.then((data) => {
        return data.json();
    }).then((jsonresponse) =>{
        if(jsonresponse.code == 200){
            this.setState({categorias : jsonresponse.data})
        }
        else{
            alert(jsonresponse.message);
        }
    }).catch((error) =>{
        alert("Error " + error);
    })
}

  componentDidMount(){
    this.getCategorias();
  }

  render(){
    return (
      <DataProvider>
        <div className="App">
            <BrowserRouter>
              <Header categorias={this.state.categorias}></Header>              
              <Ruteos categorias={this.state.categorias}></Ruteos>            
            </BrowserRouter>
        </div>
        </DataProvider> 
      );
    }
}
