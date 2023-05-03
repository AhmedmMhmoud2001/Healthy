import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import DashbourdApp from './DashbourdApp';
import 'bootstrap/dist/css/bootstrap.min.css';
 // ============= components ==================
 import Header from './components/Header/Header';
 import  Article from './components/Article/Article';
 import { Footer } from './components/Footer/Footer';
 // =============pages============
 import Home from './pages/Home/Home';
 import About from './pages/About/About';
 import Contact from './pages/Contact/Contact';
 import Specialties from './pages/Specialties/Specialties';
 
 import Articles from './pages/Articles/Articles';
 import Messenger from './pages/Messenger/Messenger';
 import Showallproducts from './dashbourd/products/Showallproducts';
 import Cart from './pages/Cart/Cart';
 import { Register } from './pages/Register/Register';
 import { Products } from './pages/Products/Products';
 import  {Login}  from './pages/Login/Login';
 import Editproduct from './dashbourd/products/Editproduct';
import Dasharticle from './dashbourd/articles/Dasharticle';
import Dashcategories from './dashbourd/categories/Dashcategories';
import Dashdoctors from './dashbourd/doctors/Dashdoctors';
import Dashspecialties from './dashbourd/specialties/Dashspecialties';
import Dashusers from './dashbourd/users/Dashusers';
import Editcategories from './dashbourd/categories/Editcategories';
import Showproducts from './components/Showproducts/Showproducts';
import Doctors from './pages/Doctors/Doctors';
import Profile from './pages/Profile/Profile';
import Editspecialties from './dashbourd/specialties/Editspecialties';
import Editusers from './dashbourd/users/Editusers';

//import { Register } from './components/Register';
function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Products" element={<Products/>}/>
            {/* <Route path="/Product" element={<Product/>}/> */}
            <Route path="/Products/:id" element={<Showproducts/>}/>
            {/* <Route path="/Products/:id" element={<Editproduct/>}/>  */}
            
            <Route path="/Specialties" element={<Specialties/>}/>
            <Route path="/Specialties/:specialtie" element={<Doctors/>}/>
            <Route path="/Articles" element={<Articles/>}/>
            <Route path="/Articles/:id" element={<Article/>}/>
            <Route path="/Messenger" element={<Messenger/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Showallproducts" element={<Showallproducts/>}/> 
            <Route path="/Showallproducts/:id" element={<Editproduct/>}/> 
            <Route path="/Dasharticle" element={<Dasharticle/>}/>
            <Route path="/Dashcategories" element={<Dashcategories/>}/>
            <Route path="/Dashcategories/:id" element={<Editcategories/>}/> 
            <Route path="/Dashdoctors" element={<Dashdoctors/>}/>
            <Route path="/Dashspecialties" element={<Dashspecialties/>}/>
            <Route path="/Dashspecialties/:id" element={<Editspecialties/>}/>
            
            <Route path="/Dashusers" element={<Dashusers/>}/>
            <Route path="/Dashusers/:id" element={<Editusers/>}/>


        </Routes>
      <Footer/>
    </Router>
);
}

export default App;
