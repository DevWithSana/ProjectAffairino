import React from 'react';
import Feature from '../Components/Feature';
import Devis from '../Components/Devis';
import Pricing from '../Components/Pricing';
import Home from '../Components/Home';


function MainPage() {
  return (
    <>
      <Home />
      <Feature />
      <Devis />
      <Pricing />
    </>
  );
}

export default MainPage;
