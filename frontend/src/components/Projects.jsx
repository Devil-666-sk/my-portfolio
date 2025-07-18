// components/Projects.jsx

const projects = [
  {
    title: 'Audiophile Clone',
    img: '/audiophile.png',
    live: 'https://audiophile-html-tailwind-clone.netlify.app/',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Shopsy Clone (React)',
    img: '/shopsy.png',
    live: 'https://shopsycloneinreactjs.netlify.app/',
    stack: ['React', 'Tailwind', 'MUI'],
  },
  {
    title: 'Crypto Tracker',
    img: 'https://your-crypto-preview-link.com/preview.jpg',
    live: 'https://crypto-eight-zeta.vercel.app/',
    stack: ['MERN', 'Tailwind', 'CoinGecko API'],
  },
  {
    title: 'DigiBeez',
    img: '/digibeez.png',
    live: 'https://degibeez.vercel.app/',
    stack: ['React', 'MUI'],
  },
  {
    title: 'React-Stopwatch',
    img: 'stopwatch.png',
    live: 'https://stop-watch-in-js.vercel.app/',
    stack: ['React', 'MUI'],
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='bg-gray-950 text-white py-20 px-4 sm:px-10'
    >
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>My Projects</h2>
        <p className='text-gray-400 text-lg'>
          Here are some of the real-world projects I’ve built using modern
          technologies.
        </p>
      </div>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow'
          >
            <a href={project.live} target='_blank' rel='noopener noreferrer'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-48 object-cover hover:scale-105 transition-transform duration-300'
              />
            </a>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-blue-600/10 text-blue-300 text-xs px-3 py-1 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition'
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
