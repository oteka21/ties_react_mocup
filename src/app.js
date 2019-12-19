
import React from "react";
import { Promo } from './Components/Promo'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Categories } from './Components/Categories'
import { History } from './Components/History'
import { Footer } from './Components/Footer'
import { tiesList } from './assets/ties-list'


// TODO:
// For mobile devices, search icon doesn't have any behavior, input test isn't displayed when I touch search icon button.

const App = () => {
  return <div className="container">
    <Promo />
    <Header/>
    <Hero list={tiesList}/>
    <Categories />
    <History />
    <Footer />
  </div>;
}

export default App;
