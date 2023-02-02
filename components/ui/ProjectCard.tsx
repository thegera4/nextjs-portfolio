import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  project: {
    title: string,
    description: string,
    image: string,
    url: string,
    sourceCode: string,
    technologies: [
      {
        icon: string,
        name: string
      }
    ],
    mobile: boolean
  }
}

function ProjectCard({ project }: Props) {

  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
    items-center justify-center p-20 md:p-44 h-screen'>
      <motion.img 
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true}}
        src={project.image}
        alt={project.title}
        className={
          project.mobile ?
           'w-[150px] h-[300px] md:w-[200px] md:h-[400px] lg:w-[230px] lg:h-[450px] object-fit rounded-md' :
            'w-[150px] h-[100px] md:w-[280px] md:h-[300px] lg:w-[500px] object-cover rounded-md'
        }
      />
      <h4 className='text-4xl font-semibold text-center'>
        <span className='underline decoration-[#16ac16]/50'>
          {project.title}
        </span>
      </h4>
      <div className='flex items-center space-x-2'>
        {project.technologies.map((tech, index) => (
          <Image
            key={index}
            src={tech.icon}
            alt={tech.name}
            width={30}
            height={30}
          />
        ))}
      </div>
      <div className='flex space-x-5'>
        <Link 
          href={project.url} 
          className='projectButton'
          target='_blank'
        >
          { project.mobile ? 'Download App' : 'See Demo'}
        </Link>
        <Link 
          href={project.sourceCode} 
          className='projectButton'
          target='_blank'
        >Source Code</Link>
      </div>
      <p className='text-lg text-center md:text-left max-w-7xl'>
        {project.description}
      </p>
    </div>
  )
}

export default ProjectCard