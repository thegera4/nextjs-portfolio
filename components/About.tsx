import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"

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
        className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover
         md:rounded-lg md:72 md:w-72 xl:w-[400px] xl:h-[400px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is my{" "}
          <span className='underline decoration-[#16ac16]/50'>
            story...
          </span>
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          exercitationem voluptates quos dolorum quas. Quisquam, quae. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam
          exercitationem voluptates quos dolorum quas. Quisquam, quae.
        </p>
      </div>
    </motion.div>
  )
}

export default About