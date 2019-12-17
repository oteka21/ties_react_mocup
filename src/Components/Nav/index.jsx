import React from 'react'
import { NavItem } from '../NavItem'

export const Nav = () => (
  <nav className="navigation">
    <ul>
    <NavItem text="Collection" list={["Tie bars", "Solid satin", "Popular"]}/>
    <NavItem text="Color" list={['red','blue','dotted', 'green']}/>
    <NavItem text="Width" list={['Small', 'Medium','large']}/>
    <NavItem text="Fabric" list={['satin', 'lino']}/>
    <NavItem text="Pattern" list={['stripes', 'dots', 'stains']}/>
    </ul>
  </nav>
)
