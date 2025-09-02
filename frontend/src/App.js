import React from 'react';

import { About, Footer, Header, Skills, Work, Achievements, ResearchExperience, Certications } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <ResearchExperience />
      <Certications />
      <Achievements />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
