import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import QrCodeReader from './pages/QrCodeReader';

function App() {
  return ( 
    <Base>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/signup" element = {<Signup />}/>
      <Route path="/QrCodeReader" element = {<QrCodeReader/>}/>
    </Routes>
    </BrowserRouter>
    </Base>
    

  );
}

export default App;
