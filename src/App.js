import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import FirstCarousel from './FirstCarousel';
import Offer from './Offer';
import Products from './Products';
import PopularCat from './PopularCat';
import Arrivals from './Arrivals';
import Blog from './Blog';
import Footer from './Footer';
import Repair from './Repair';
import SaleOffer from './SaleOffer';
import SecondLast from './SecondLast';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <FirstCarousel/>
      <Offer/>
      <Products/>
      <Repair/>
      <PopularCat/>
      <SaleOffer/>
      <Arrivals/>
      <Blog/>
      <SecondLast/>
      <Footer/>
    </>
  );
}

export default App;
