import FirstCarousel from './FirstCarousel';
import Offer from './Offer';
import Products from './Products';
import PopularCat from './PopularCat';
import Arrivals from './Arrivals';
import Blog from './Blog';
import Repair from './Repair';
import SaleOffer from './SaleOffer';

function Home() {
  return (
    <>
      <FirstCarousel/>
      <Offer/>
      <Products/>
      <Repair/>
      <PopularCat/>
      <SaleOffer/>
      <Arrivals/>
      <Blog/>
    </>
  );
}

export default Home;
