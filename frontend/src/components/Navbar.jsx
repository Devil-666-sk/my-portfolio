import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className='bg-gray-950 text-white fixed top-0 left-0 w-full z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <div
          onClick={() => scrollToSection('hero')}
          className='text-xl font-bold tracking-wide cursor-pointer'
        >
          Shubham Kumar
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8 text-sm font-medium'>
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
            href='/ShubhamKumar.pdf'
            download
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
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
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
            className='block w-full text-left hover:text-blue-400 cursor-pointer'
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className='block w-full text-left hover:text-blue-400 cursor-pointer'
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className='block w-full text-left hover:text-blue-400 cursor-pointer'
          >
            Projects
          </button>
          <a
            href='/cv.pdf'
            download
            onClick={() => setIsOpen(false)}
            className='block hover:text-blue-400 cursor-pointer'
          >
            Download CV
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className='block w-full text-left hover:text-blue-400 cursor-pointer'
          >
            Get in Touch
          </button>
        </nav>
      )}
    </header>
  );
}
