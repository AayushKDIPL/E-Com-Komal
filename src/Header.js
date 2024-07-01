import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <img src="http://logos.textgiraffe.com/logos/logo-name/Kanak-designstyle-summer-m.png" alt="Logo" />
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
        <i class="fa-regular fa-heart"></i>
        <div className='heart'>1</div>
        <i class="fa-solid fa-bag-shopping"></i>
        <div className='buy_beg'>1</div>
      </div>
    </header>
  );
};

export default Header;
