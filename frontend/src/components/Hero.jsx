import myPhoto from '../assets/my.jpg';

export default function Hero() {
  const handleDownload = () => {
    fetch('https://your-backend-url/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'download' }),
    });
  };

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden px-6 pt-28 pb-16'
    >
      {/* Animated Gradient Background */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <div className='absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 via-blue-600 to-indigo-600 opacity-30 rounded-full filter blur-3xl animate-gradient'></div>
        <div className='absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 opacity-20 rounded-full filter blur-2xl animate-gradient animation-delay-3000'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-14'>
        {/* Left Text Content */}
        <div className='md:w-1/2 text-white text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-6 leading-tight'>
            Hi, I'm <span className='text-blue-400'>Shubham Kumar</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl'>
            I’m a passionate{' '}
            <span className='text-blue-400 font-medium'>
              MERN Stack Developer
            </span>{' '}
            with 2 years of experience building full-stack web applications that
            are scalable, responsive, and user-friendly. I specialize in
            JavaScript, React, Node.js, Express, and MongoDB, and love crafting
            modern UIs and APIs that solve real-world problems.
          </p>
          <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
            <a
              href='/ShubhamKumar.pdf'
              download
              onClick={handleDownload}
              className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium transition'
            >
              Download CV
            </a>
            <a
              href='#contact'
              className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full font-medium transition'
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <img
            src={myPhoto}
            alt='Shubham Kumar'
            className='w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-blue-600'
          />
        </div>
      </div>
    </section>
  );
}
