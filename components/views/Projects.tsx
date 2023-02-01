import { motion } from 'framer-motion'
import SectionTitle from '../reusable/SectionTitle'
import ProjectCard from '../ui/ProjectCard'

interface props {
  projects: {
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
    ]
  }[]
}

function Projects({ projects }: props) {

  return (
    <motion.div 
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
    >
      <SectionTitle title='Projects' />
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#16ac16]/80'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#16ac16]/10 left-0 
      h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects