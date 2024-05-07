import React from 'react';
import Navbar from './component/navbar'; // Import your Navbar component
import Hero from './component/hero'; // Import your Hero component
import Blog from './component/blog';
import Expert from './component/expert';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog/>
      <Expert/>
    </div>
  );
}

export default App;
