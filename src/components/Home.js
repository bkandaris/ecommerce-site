import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Categories from './Categories';
import Products from './Products';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
