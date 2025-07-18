import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // close mobile menu on click
    }
  };

  // CV Download Tracker
  const handleDownload = () => {
    fetch('https://your-backend-url/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'download' }),
    });
  };

  // Prevent scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className='bg-gray-950 text-white fixed top-0 left-0 w-full z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className='text-xl font-bold tracking-wide cursor-pointer'
        >
          Shubham Kumar
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8 text-sm font-medium '>
          <button
            onClick={() => scrollToSection('about')}
            className='hover:text-blue-400 transition cursor-pointer'
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className='hover:text-blue-400 transition cursor-pointer'
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className='hover:text-blue-400 transition cursor-pointer'
          >
            Projects
          </button>
          <a
            href='/cv.pdf'
            download
            onClick={handleDownload}
            className='hover:text-blue-400 transition cursor-pointer'
          >
            Download CV
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className='hover:text-blue-400 transition cursor-pointer'
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className='md:hidden focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-6 h-6 text-white cursor-pointer'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className='md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 text-sm'>
          <button
            onClick={() => scrollToSection('about')}
            className='block w-full text-left hover:text-blue-400'
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className='block w-full text-left hover:text-blue-400'
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className='block w-full text-left hover:text-blue-400'
          >
            Projects
          </button>
          <a
            href='/cv.pdf'
            download
            onClick={() => {
              handleDownload();
              setIsOpen(false);
            }}
            className='block hover:text-blue-400'
          >
            Download CV
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className='block w-full text-left hover:text-blue-400'
          >
            Get in Touch
          </button>
        </nav>
      )}
    </header>
  );
}
