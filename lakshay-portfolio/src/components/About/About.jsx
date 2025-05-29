import React from 'react';
import { motion } from 'framer-motion';
import javaIcon from '../../assets/java.png'; // Replace with your paths
import backendIcon from '../../assets/spring.png';
import devopsIcon from '../../assets/devops-icon.png';
import fullstackIcon from '../../assets/db.png';

const expertise = [
  { title: 'Java Developer', icon: javaIcon },
  { title: 'Backend Development', icon: backendIcon },
  { title: 'DevOps Enthusiast', icon: devopsIcon },
  { title: 'Full Stack Development', icon: fullstackIcon },
];

const About = () => {
  return (
    <section id='About' className='bg-[#12171a] text-white py-16 px-4 md:px-20 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-t-lg p-12'>
      {/* Intro & Overview */}
      <div className='mb-12'>
        <p className='text-sm text-[#52B2E5] tracking-widest uppercase mb-2'>Introduction</p>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-6'>Overview.</h2>
        <p className='text-gray-300 text-lg leading-relaxed max-w-4xl'>
          I'm a passionate Java Developer with experience in building scalable backend systems and
          cloud-based applications. Skilled in Spring Boot, and databases like MySQL and
          PostgreSQL, I focus on creating efficient, secure, and high-performing solutions. With hands-on
          expertise in developing platforms like Restaurant Review and Blog Platform, I enjoy solving complex
          problems and delivering impactful user experiences. Let's collaborate and build something great!
        </p>
      </div>

      
    {/* Cards */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
    {expertise.map((item, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
        className='bg-gradient-to-br from-[#1e2326] to-[#0A0C0D] border border-[#52B2E5] rounded-2xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300 group'
        >
        <div className='w-16 h-16 mb-4'>
            <img src={item.icon} alt={item.title} className='w-full h-full object-contain' />
        </div>
        <h3 className='text-lg font-bold text-white group-hover:text-[#52B2E5] transition-colors'>
            {item.title}
        </h3>
        </motion.div>
    ))}
    </div>
    </section>
  );
};

export default About;
