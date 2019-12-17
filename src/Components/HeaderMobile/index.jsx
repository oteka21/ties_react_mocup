import React from 'react'
import { Nav } from '../Nav'

export const HeaderMobile = () => (
  <div className="header-content mobile">
    <div className="logo-actions-container">
      <div className="logo">
        <img 
        src='../src/assets/images/logo-inline@2x.png'
        alt="logo" />
      </div>
      <ul className="actions">
        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
        <li><a href="#"><i className="fas fa-user"></i></a></li>
        <li><a href="#"><i className="fas fa-search"></i></a></li> 
      </ul>
    </div>
    <Nav />
</div>
)