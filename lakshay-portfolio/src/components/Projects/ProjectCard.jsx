import React from 'react'

const ProjectCard = ({image, title, main, hashes, demoLink, codeLink, docLink}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-gradient-to-br from-[#1e2326] to-[#0A0C0D] border border-[#52B2E5] shadow-slate-900 rounded-2xl'>
        <div className="p-4 rounded-lg overflow-hidden w-64 h-40">
            <img
                className="w-full h-full object-cover"
                src={image}
                alt={title}
            />
        </div>

        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        <div className='px-4 flex flex-wrap gap-2 mt-2'>
          {hashes.map((tag, i) => (
            <span key={i} className="bg-[#52B2E5] text-black text-xs md:text-sm px-2 py-1 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className='mt-4 p-2 md:p-4 flex gap-3 justify-between'>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl inline-block text-center ' 
            >
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl inline-block text-center'
            >
              Source
            </a>
          )}
          {docLink && (
            <a
              href={docLink}
              target="_blank"
              rel="noopener noreferrer"
              className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl inline-block text-center'
            >
              Documentaion
            </a>
          )}
        </div>
    </div>
  )
}

export default ProjectCard
