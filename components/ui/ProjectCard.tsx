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
    items-center justify-center p-20 md:p-44 h-screen md:top-[0px] sm:top-[0px] 
    xs:relative xs:top-[150px] 2xs:relative 2xs:top-[550px]'>
      <motion.img 
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true}}
        src={project.image}
        alt={project.title}
        className={
          project.mobile ?
           'xs:w-[100px] xs:h-[200px] md:w-[200px] md:h-[400px] lg:w-[230px] lg:h-[450px] object-fit rounded-md' :
            'xs:w-[350px] xs:h-[200px] md:w-[450px] md:h-[300px] lg:w-[500px] object-fit rounded-md'
        }
      />
      <h4 className='text-4xl font-semibold text-center xs:text-2xl 2xs:text-2xl'>
        <span className='underline decoration-[#16ac16]/50'>
          {project.title}
        </span>
      </h4>
      {project.technologies &&
      <div className='flex items-center space-x-2 '>
        {project.technologies.map((tech, index) => (
          <Image
            key={index}
            src={tech.icon}
            alt={tech.name}
            width={30}
            height={30}
            className='xs:w-[20px] xs:h-[20px] xs:-ml-5 2xs:-ml-5 2xs:w-[15px] 2xs:h-[15px]'
          />
        ))}
      </div>
      }
      <div className='flex space-x-5'>
        {
          project.url &&
        <Link 
          href={project.url} 
          className='projectButton'
          target='_blank'
        >
          { project.mobile ? 'Download App' : 'See Demo'}
        </Link>
        }
        <Link 
          href={project.sourceCode} 
          className='projectButton'
          target='_blank'
        >
          {project.technologies ? 'Source Code' : 'Github profile'}
        </Link>
      </div>
      <p className='text-lg text-center lg:text-lg md:text-left md:text-sm sm:text-sm 
      xs:text-sm max-w-7xl xlg:visible lg:visible md:visible sm:visible xs:invisible 2xs:invisible'>
        {project.description}
      </p>
    </div>
  )
}

export default ProjectCard