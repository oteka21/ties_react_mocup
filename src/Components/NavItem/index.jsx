import React from 'react'


export const NavItem = ({text, list}) => {
  return <li className="navItem">
    <a href="#" className="nav-anchor">{text}</a>
    <span className="dropdown-content">
      {
        list.map((item, index) => <a href="#" key={index}>{item}</a>)
      }
    </span>
  </li>
}