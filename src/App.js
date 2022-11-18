import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
 import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import  {Login}  from './components/Login';
import  {Prescription} from './components/Prescription';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { Register } from './components/Register';
import { Footer } from './components/Footer';
//import { Register } from './components/Register';
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Prescription" element={<Prescription/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login />}/>  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
