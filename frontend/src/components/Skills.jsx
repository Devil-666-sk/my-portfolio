import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMui,
  SiJavascript,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className='text-orange-500' /> },
    { name: 'CSS3', icon: <FaCss3Alt className='text-blue-500' /> },
    { name: 'JavaScript', icon: <SiJavascript className='text-yellow-400' /> },
    { name: 'React.js', icon: <FaReact className='text-cyan-400' /> },
    { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
    { name: 'Express.js', icon: <SiExpress className='text-gray-300' /> },
    { name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-sky-400' /> },
    { name: 'Material UI', icon: <SiMui className='text-blue-400' /> },
    { name: 'Bootstrap', icon: <FaBootstrap className='text-purple-500' /> },
    { name: 'Figma', icon: <FaFigma className='text-pink-500' /> },
  ];

  return (
    <section id='skills' className='bg-gray-950 text-white py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block pb-2'>
          My Skills
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='flex flex-col items-center bg-gray-900 hover:bg-gray-800 p-5 rounded-xl transition duration-300'
            >
              <div className='text-4xl mb-3'>{skill.icon}</div>
              <p className='text-sm font-semibold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
