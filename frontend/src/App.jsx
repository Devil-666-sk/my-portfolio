import { useEffect } from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    fetch('https://your-backend-url/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'visit' }),
    });
  }, []);

  return (
    <>
      <div className='font-sans text-gray-800'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
