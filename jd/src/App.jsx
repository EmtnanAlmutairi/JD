import React, { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('./component/navbar')); // Lazy load Navbar component
const Hero = lazy(() => import('./component/hero')); // Lazy load Hero component
const Blogs = lazy(() => import('./component/blogs')); // Lazy load Blog component
const Expert = lazy(() => import('./component/expert')); // Lazy load Expert component
const Workshops = lazy(() => import('./component/Workshops')); // Lazy load Workshops component
const Footer = lazy(() => import('./component/footer')); // Lazy load Workshops component

<Suspense fallback={<div>Loading...</div>}>
  {/* Lazy-loaded components */}
  <Navbar />
  <Hero />
  <Blogs />
  <Expert />
  <Workshops />
  <Footer/>
</Suspense>


const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Lazy-loaded components */}
        <Navbar />
        <Hero />
        <Blogs />
        <Expert />
        <Workshops />
        <Footer/>
      </Suspense>
    </div>
  );
}
export default App;