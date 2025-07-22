import { Briefcase, Code, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section
      id='about'
      className='bg-gray-950 text-white px-6 py-20 relative overflow-hidden'
    >
      {/* Background Decoration */}
      <div className='absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 opacity-20 rounded-full filter blur-3xl animate-gradient'></div>

      <div className='relative max-w-6xl mx-auto'>
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12'>
          About <span className='text-blue-500'>Me</span>
        </h2>

        {/* Content Layout */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* Left Info Box */}
          <div className='md:w-1/2 space-y-6 text-lg text-gray-300'>
            <p>
              Hello! I’m{' '}
              <span className='text-white font-semibold'>Shubham Kumar</span>, a
              highly motivated and detail-oriented{' '}
              <span className='text-blue-400'>MERN Stack Developer</span> with
              over 2 years of hands-on experience in designing, developing, and
              deploying full-stack web applications.
            </p>
            <p>
              My expertise lies in building modern and scalable solutions using{' '}
              <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I’m
              passionate about crafting pixel-perfect UIs and writing clean,
              maintainable code. I have a strong understanding of REST APIs,
              authentication, performance optimization, and responsive design.
            </p>
            <p>
              I thrive in collaborative environments and enjoy working with
              teams to solve complex problems. I'm continuously learning and
              love staying up-to-date with the latest technologies and best
              practices in the web development world.
            </p>
            <p>
              Whether it’s building robust backend systems, sleek React
              dashboards, or integrating APIs — I bring commitment, creativity,
              and clean code to every project I work on.
            </p>
          </div>

          {/* Right Experience Box */}
          <div className='md:w-1/2 space-y-6'>
            <div className='bg-gray-800 p-6 rounded-xl shadow-lg flex items-start gap-4'>
              <Briefcase size={32} className='text-blue-400 mt-1' />
              <div>
                <h4 className='text-xl font-semibold'>
                  2+ Years of Experience
                </h4>
                <p className='text-gray-400'>
                  Building scalable full-stack web applications using the MERN
                  stack.
                </p>
              </div>
            </div>

            <div className='bg-gray-800 p-6 rounded-xl shadow-lg flex items-start gap-4'>
              <Code size={32} className='text-purple-400 mt-1' />
              <div>
                <h4 className='text-xl font-semibold'>MERN Stack Specialist</h4>
                <p className='text-gray-400'>
                  Expert in MongoDB, Express.js, React.js, and Node.js with
                  reusable component structure.
                </p>
              </div>
            </div>

            <div className='bg-gray-800 p-6 rounded-xl shadow-lg flex items-start gap-4'>
              <GraduationCap size={32} className='text-green-400 mt-1' />
              <div>
                <h4 className='text-xl font-semibold'>Graduate Developer</h4>
                <p className='text-gray-400'>
                  Bachelor graduate with a strong technical foundation and
                  excellent problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
