import { motion } from 'framer-motion'
import SectionTitle from './reusable/SectionTitle'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5]

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
      snap-x snap-mandatory z-20'>
        {projects.map((project, index) => (
          <div 
            key={index}
            className='w-screen flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              src='/images/profile.png'
              alt='profile'
              initial={{ y: -300, opacity: 0}}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-44 h-44 object-cover'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#16ac16]/50'>
                  Project Title
                </span>
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptates, quibusdam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#16ac16]/10 left-0 
      h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects