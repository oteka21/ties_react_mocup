import React from 'react'
import { Nav } from '../Nav' 


export const HeaderDesktop = () => (
  <div className="header-content desktop">
  <div className="page-sizer">
    <div className="logo-actions-container">
      <div className="logo">
        <img 
        src='../src/assets/images/logo-stack@2x.png' 
        alt="logo" className="logo-stack"/>
        <img 
        src='../src/assets/images/logo-inline@2x.png' 
        alt="logo" className="logo-inline mobile"/>
      </div>
      <Nav/>
      <div className="actions">
        <div className="user-actions">
          <a href="#">SIGN IN</a><a href="#">REGISTER</a>
        </div>
        <div className="cart-container">
          <a href="#" className="card-button">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="card-number">0</span>
          </a>
        </div>
        <div className="input-search-container">
          <label className="search-bar">
            <i className="fas fa-search search-icon"></i>
            <input type="text" className="search" placeholder="Search" />
          </label>
        </div>
      </div>
  </div>
</div>
</div>
)

