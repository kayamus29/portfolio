import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;