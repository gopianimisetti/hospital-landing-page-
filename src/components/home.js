
import React from 'react';
import Navbar from './Navbar';
import Carousel from './carousel';
import Card from './Cardd';
import Images from './images';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card />
      <Images />
      <Footer />
    </div>
  );
};

export default Home;
