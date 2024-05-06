import React from 'react';
import Navbar from './component/navbar'; // Import your Navbar component
import Hero from './component/hero'; // Import your Hero component
import Blog from './component/blog';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog/>
    </div>
  );
}

export default App;
