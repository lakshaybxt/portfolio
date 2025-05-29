import React from 'react'
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard'
import weather from '../../assets/projects/weather.png'
import restaurant from '../../assets/projects/restaurant.webp'
import blog from '../../assets/projects/blog.webp'
import seasons from '../../assets/projects/seasons.png'
import task from '../../assets/projects/task.webp'
import youTube from '../../assets/projects/youTube.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const project = [
  {
    image: restaurant,
    title: "Restaurant Review Platform",
    main: "A location-based restaurant discovery and review web app built with Elasticsearch for fast and accurate search. Integrated with Keycloak for secure OAuth2 authentication. Users can view nearby restaurants, filter them by ratings, and write detailed reviews for individual restaurants.",
    hashes: ["#Java", "#Spring Boot", "#Docker", "#Elasticsearch", "#Keycloak"],
    docLink: "",
    codeLink: "https://github.com/lakshaybxt/restaurant-review-platform.git", 
    demoLink: ""
  },
  {
    image: blog,
    title: "Blog Platform",
    main: "A full-featured blogging backend built with Java, Spring Boot, and JWT-based authentication. Supports user registration and login, creating and managing blog posts, categorizing content with tags and categories, and secure role-based access. Designed for scalability and clean REST API integration.",
    hashes: ["#Java", "#Spring Boot", "#Spring Security", "#Docker", "#PostgreSQL"],
    docLink: "https://western-aluminum-170.notion.site/API-Documentation-Blog-Platform-1f4e44bc5a7f80e6867bdc48c53e4b43",
    codeLink: "https://github.com/lakshaybxt/Blog-Platform.git", 
    demoLink: ""
  },
  {
    image: task,
    title: "Task Tracking",
    main: "A backend-driven task management system developed using Java, Spring Boot, PostgreSQL, and Docker. Enables users to create, update, and track tasks efficiently. Features include deadline management, task status updates, and user-specific task organization, with robust RESTful API support for seamless frontend integration.",
    hashes: ["#Java", "#Spring Boot", "#Docker", "#PostgreSQL"],
    docLink: "https://western-aluminum-170.notion.site/API-Documentation-Task-Management-Service-1ebe44bc5a7f8043b528ffa56868d6ed",
    codeLink: "https://github.com/lakshaybxt/Task-Tracking-App.git", 
    demoLink: ""
  },
  {
    image: seasons,
    title: "Seasons-E-Commerce",
    main: "A vintage-themed online shopping platform inspired by Bewakoof, built with HTML, CSS, and JavaScript. Features include responsive design, product listings, detailed item pages, and a smooth shopping experience. Integrated with an AI-powered chatbot using Gemini API to assist users with product queries and enhance customer engagement.",
    hashes: ["#HTML", "#CSS", "#JavaScript", "#Fetch API"],
    docLink: "",
    codeLink: "https://github.com/lakshaybxt/Seasons-E-Commerce-.git",
    demoLink: "https://seasons-e-commerce.netlify.app/"
  },
  {
    image: weather,
    title: "Weather App",
    main: "A responsive weather forecasting application built using HTML, CSS, and JavaScript. Fetches real-time weather data from OpenWeatherMap API, allowing users to search for any city and view current temperature, humidity, wind speed, and weather conditions with a clean and intuitive UI.",
    hashes: ["#HTML", "#CSS", "#JavaScript", "#OpenWeatherMap API"],
    docLink: "",
    codeLink: "https://github.com/lakshaybxt/Weather.git",
    demoLink: "https://lakshaybxt.github.io/Weather/"
  },
  {
    image: youTube,
    title: "YouTube Clone",
    main: "A static front-end clone of the YouTube homepage built using HTML and CSS. Replicates the layout, navigation bar, video thumbnails, and responsive design, offering a close visual and structural mimic of the original platform.",
    hashes: ["#HTML", "#CSS"],
    docLink: "",
    codeLink: "https://github.com/lakshaybxt/YouTube-Project.git",
    demoLink: "https://lakshaybxt.github.io/YouTube-Project/"
  },
];

function Projects() {
  return (
    <div id='Projects'>
        <div className='bg-[#12171a] text-white py-16 px-4 md:px-20 shadow-xl mx-0 md:mx-20 bg-opacity-30 p-12'>
        <p className='text-sm text-[#52B2E5] tracking-widest uppercase mb-2'>My work</p>
        <h2 className='text-4xl md:text-5xl font-extrabold mb-6'>Projects.</h2>
        <p className='text-gray-300 text-lg leading-relaxed max-w-4xl'>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
        <motion.div
            className="py-12 grid grid-cols-1 custom-cols-2 custom-cols-3 custom-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {project.map((proj, index) => (
                <motion.div key={index} variants={itemVariants}>
                <ProjectCard 
                    image={proj.image}
                    title={proj.title}
                    main={proj.main}    
                    hashes={proj.hashes}
                    demoLink={proj.demoLink}
                    codeLink={proj.codeLink}
                    docLink={proj.docLink}
                />
                </motion.div>
            ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Projects