import React from 'react'
import { HeaderMobile as Mobile } from '../HeaderMobile'
import { HeaderDesktop as Desktop } from '../HeaderDesktop'


export const Header = () => (
  <header>
    <Mobile />
    <Desktop />
  </header>
)