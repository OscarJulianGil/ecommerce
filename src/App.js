import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { AppCarousel } from './components/AppCarousel/AppCarousel';
import { BrowserRouter } from 'react-router-dom';
import { Ruteos } from './Ruteos';
import { DataProvider } from './Context/DataProvider';


function App() {
  return (
    <DataProvider>
      <div className="App">
          <BrowserRouter>
            <Header></Header>              
            <Ruteos></Ruteos>            
          </BrowserRouter>
      </div>
      </DataProvider>
    
  );
}

export default App;
