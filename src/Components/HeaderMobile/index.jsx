import React from 'react'
import { Nav } from '../Nav'

export const HeaderMobile = () => {
  function handleSearchClick(e){
    // e.preventDefault()
    const [myItem] = document.getElementsByClassName('search-input-acor')
    console.log(myItem.style.maxHeight)
    if (myItem.style.maxHeight == '0px'){
      myItem.style.padding = '10px'
      myItem.style.maxHeight = myItem.scrollHeight + "px"
    }else {
      myItem.style.padding = '0px'
      myItem.style.maxHeight = "0px"
    }
  }
  
  return (
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
        <li><a href="#"onClick={handleSearchClick} ><i className="fas fa-search"></i></a></li> 
      </ul>
    </div>
    <div className="page-sizer search-input-acor">
      <input type="text" placeholder="Search" className="input" />
    </div>
    <div className="page-sizer">
      <Nav />
    </div>
</div>
)}