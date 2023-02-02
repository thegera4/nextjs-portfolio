import { motion } from "framer-motion"
import SectionTitle from "../reusable/SectionTitle"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      className='flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <SectionTitle title='About' />
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        src='/images/profile.png'
        alt='Me'
        className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full 
        object-cover md:rounded-lg md:72 md:w-72 xl:w-[400px] xl:h-[400px]
        2xs:w-[100px] 2xs:h-[100px] 2xs:mt-10'
      />
      <div className='space-y-10 px-0 md:px-10 2xs:space-y-5'>
        <h4 className='text-4xl font-semibold 2xs:text-[1.5rem]'>
          Here is my{" "}
          <span className='underline decoration-[#16ac16]/50'>
            story...
          </span>
        </h4>
        <p className='text-base 2xs:hidden'>
          I'm a mechatronics engineer with 10 years of professional experience in different manufacturing industries 
          (automotive, metal-mechanic, plastics, food, etc), in different positions 
          (automation, maintenance, production, engineering, quality, projects, etc).
        </p>
        <p className='text-base'>
          During the last few years, I found a real passion for programming and becoming a developer,
          so I started studying Mobile development technologies, and then I decided to start a 
          Bootcamp (Henry) in order to become a Fullstack Developer.
        </p>
      </div>
    </motion.div>
  )
}

export default About