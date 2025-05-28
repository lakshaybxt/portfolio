import React from 'react';
import { motion } from 'framer-motion';
import javaIcon from '../../assets/skills-icons/skills-icons/java.svg'; 
import springIcon from '../../assets/skills-icons/skills-icons/spring.svg'; 
import dockerIcon from '../../assets/skills-icons/skills-icons/docker.svg'; 
import htmlIcon from '../../assets/skills-icons/skills-icons/html.svg'; 
import cssIcon from '../../assets/skills-icons/skills-icons/css.svg'; 
import jsIcon from '../../assets/skills-icons/skills-icons/js.svg'; 
import reactIcon from '../../assets/skills-icons/skills-icons/react.svg'; 
import postgresqlIcon from '../../assets/skills-icons/skills-icons/postgresql.svg';
import gitIcon from '../../assets/skills-icons/skills-icons/git.svg'; 
import codeSoft from '../../assets/company/codeSoft.jpeg'
import collegeTips from '../../assets/company/collegetips.webp'

const experiences = [
  {
    role: "Java Developer Intern",
    company: "CodSoft",
    date: "May 2025 – June 2025",
    icon: codeSoft,
    points: [
      "Developed and implemented JUnit test cases, achieving 90% code coverage.",
      "Resolved critical bugs, reducing downtime by 20%, and deployed fixes.",
      "Collaborated with cross-functional teams, speeding up delivery by 30%."
    ]
  },
  {
    role: "Java Developer Intern",
    company: "CollegeTips.in",
    date: "May 2025 – June 2025",
    icon: collegeTips,
    points: [
        "Worked on Java-based development tasks, delivering features and fixes within defined deadlines.",
        "Maintained detailed technical documentation to ensure clarity and ease of future reference.",
        "Followed Agile methodology for iterative development, sprint planning, and task tracking."
    ]
  }
];

const skills = [
  { name: "Java", icon: javaIcon },
  { name: "Spring Boot", icon: springIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "React", icon: postgresqlIcon },
  { name: "Redux", icon: dockerIcon },
  { name: "Tailwind CSS", icon: gitIcon }
];

const Experience = () => {
  return (
    <div className='bg-[#12171a] text-white py-16 px-4 md:px-20 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-b-lg'>
      <p className='text-sm text-[#52B2E5] tracking-widest uppercase mb-2 text-center'>
        What I have done so far
      </p>
      <h2 className='text-4xl md:text-5xl font-extrabold mb-12 text-center'>
        Work Experience.
      </h2>

      <div className='space-y-20'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={exp.icon}
              alt={`${exp.company} logo`}
              className='w-20 h-20 object-contain rounded-full bg-white p-1 shadow-md'
            />
            <div className='max-w-xl'>
              <h3 className='text-xl font-semibold'>{exp.role}</h3>
              <p className='text-[#52B2E5] text-sm font-medium'>{exp.company}</p>
              <p className='text-gray-400 text-sm mb-3'>{exp.date}</p>
              <ul className='list-disc list-inside space-y-1 text-gray-300'>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

       <div className=' text-white mt-20 py-16 px-6 md:px-20'>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-items-center'>
        {skills.map((skill, index) => (
        <motion.div
            key={index}
            className='flex flex-col items-center space-y-2'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <img
            src={skill.icon}
            alt={skill.name}
            className='w-20 h-20 object-contain hover:scale-110 transition-transform duration-300'
            />
        </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Experience;
