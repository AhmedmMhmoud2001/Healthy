import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// ============= components ==================
import Header from './components/Header/Header';
import { Product } from './components/Product/Product';
import { Footer } from './components/Footer/Footer';
// =============pages============
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Specialties from './pages/Specialties/Specialties';
import Articles from './pages/Articles/Articles';
import Messenger from './pages/Messenger/Messenger';
import Cart from './pages/Cart/Cart';
import { Register } from './pages/Register/Register';
import { Products } from './pages/Products/Products';
import  {Login}  from './pages/Login/Login';
//import { Register } from './components/Register';
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Products/:id" element={<Product/>}/>
          <Route path="/Specialties" element={<Specialties/>}/>
          <Route path="/Articles" element={<Articles/>}/>
          <Route path="/Messenger" element={<Messenger/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
