import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { AppCarousel } from './components/AppCarousel/AppCarousel';
import { BrowserRouter } from 'react-router-dom';
import { Ruteos } from './Ruteos';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
          <AppCarousel></AppCarousel>
          <Ruteos></Ruteos>
        </BrowserRouter>
    </div>
  );
}

export default App;
