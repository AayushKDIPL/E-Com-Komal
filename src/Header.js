import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <a href="/"><img src="https://swayamenterprises.com/assets/logo-Bi6m8CFo.jpeg" alt="Logo" /></a>
      </div>
      <div className="search-container">
        <select className="category-dropdown">
          <option value="all" className='all_cat'>All Categories</option>
          <option value="category1">Men</option>
          <option value="category2">Women</option>
        </select>
        <div className='search_div'><input type="text" placeholder="Search..." className="search-bar" /></div>
      </div>
      <div className="icons">
      <a href="/heart" style={{color:"black"}}><i class="fa-regular fa-heart"></i></a>
        <div className='heart'>1</div>
        <i class="fa-solid fa-bag-shopping" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        <div className='buy_beg'>1</div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"><a href="/viewcart" style={{color:"white",textDecoration:"none"}}>View Cart</a></button>
        <button type="button" class="btn btn-primary"><a href="/checkout" style={{color:"white",textDecoration:"none"}}>CheckOut</a></button>
      </div>
    </div>
  </div>
</div>
    </header>



  );
};

export default Header;
