import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Headline from './components/Headline';
import Food from './components/Food';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Food/>
      <Categories/>
    </div>
  );
}

export default App;
