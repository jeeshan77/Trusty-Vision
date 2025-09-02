'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCuttlefish,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaWordpress
} from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiCsharp,
  SiKotlin,
  SiSwift,
  SiGo,
  SiRust,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFlutter,
  SiNetlify,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiSpringboot
} from 'react-icons/si';

const tools = [
  { name: 'React', icon: <FaReact className='text-sky-400' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
  { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
  { name: 'JavaScript', icon: <FaJsSquare className='text-yellow-400' /> },
  { name: 'PHP', icon: <FaPhp className='text-indigo-400' /> },
  { name: 'Python', icon: <FaPython className='text-yellow-500' /> },
  { name: 'C', icon: <FaCuttlefish className='text-gray-400' /> },
  { name: 'C++', icon: <SiCplusplus className='text-blue-500' /> },
  { name: 'C#', icon: <SiCsharp className='text-purple-500' /> },
  { name: 'Java', icon: <FaJava className='text-red-600' /> },
  { name: 'Next.js', icon: <SiNextdotjs className='text-white' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-600' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-400' /> },
  { name: 'MySQL', icon: <SiMysql className='text-blue-400' /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className='text-sky-600' /> },
  { name: 'Firebase', icon: <SiFirebase className='text-yellow-400' /> },
  { name: 'AWS', icon: <FaAws className='text-orange-500' /> },
  { name: 'GitHub', icon: <FaGithub className='text-gray-300' /> },
  { name: 'Git', icon: <FaGitAlt className='text-red-500' /> },
  { name: 'Docker', icon: <FaDocker className='text-sky-400' /> },
  { name: 'Kotlin', icon: <SiKotlin className='text-pink-500' /> },
  { name: 'Swift', icon: <SiSwift className='text-orange-400' /> },
  { name: 'Go', icon: <SiGo className='text-sky-500' /> },
  { name: 'Rust', icon: <SiRust className='text-orange-700' /> },

  // ✅ New 12 skills
  { name: 'Flutter', icon: <SiFlutter className='text-sky-400' /> },
  { name: 'Netlify', icon: <SiNetlify className='text-green-500' /> },
  { name: 'Express.js', icon: <SiExpress className='text-gray-300' /> },
  { name: 'GraphQL', icon: <SiGraphql className='text-pink-500' /> },
  { name: 'Redux', icon: <SiRedux className='text-purple-500' /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className='text-sky-400' /> },
  { name: 'Bootstrap', icon: <SiBootstrap className='text-indigo-600' /> },
  { name: 'Django', icon: <SiDjango className='text-green-700' /> },
  { name: 'Spring Boot', icon: <SiSpringboot className='text-green-500' /> },
  { name: 'Figma', icon: <FaFigma className='text-pink-400' /> }
];

function PowerfulTools() {
  return (
    <section
      id='powerful-tools'
      className='w-full bg-gradient-to-b from-black via-gray-900 to-black py-20'
    >
      <div className='container mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='-mt-8 mb-14 text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl'
        >
          Software Development <span className='text-indigo-500'>Tools</span>
        </motion.h2>

        <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 25px rgba(99,102,241,0.8)'
              }}
              className='flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-950/80 p-8 transition-all duration-300 hover:border-indigo-500'
            >
              <div className='mb-3 text-6xl drop-shadow-md'>{tool.icon}</div>
              <p className='text-lg font-semibold text-gray-200 transition-colors duration-300 group-hover:text-indigo-400'>
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TechnologiesPage() {
  return (
    <main className='relative min-h-screen bg-black'>
      {/* Back to Home Button (Top Left) */}
      <div className='absolute left-6 top-6'>
        <Link href='/' passHref>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 20px rgba(59,130,246,0.7)'
            }}
            whileTap={{ scale: 0.95 }}
            className='rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-300'
          >
            ⬅ Back to Home
          </motion.button>
        </Link>
      </div>

      <div className='container mx-auto py-20 text-center'>
        <PowerfulTools />
      </div>
    </main>
  );
}
