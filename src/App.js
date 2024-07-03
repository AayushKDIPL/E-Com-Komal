import About from './About/About';
import OurCompany from './About/OurCompany';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondLast from './SecondLast';
import Contact from './Contact/Contact';
import Shop from './Product/Shop';
import CheckOut from './CheckOutCart/CheckOut';
import ViewCart from './ViewCart/ViewCart';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={< About />}/>
        <Route path="/contact" element={< Contact />}/>
        <Route path="/shop" element={< Shop />}/>
        <Route path="/checkout" element={< CheckOut />}/>
        <Route path="/viewcart" element={< ViewCart />}/>
      </Routes>
      <SecondLast/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
