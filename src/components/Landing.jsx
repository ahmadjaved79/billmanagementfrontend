import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import BillManagement from './BillManagement';
import MissionVision from './MissionVision';
import FAQ from './FAQ';
import Contact from './Contact';


const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BillManagement />
      <MissionVision />
      <FAQ />
      <Contact />
    </>
  );
};

export default Landing;