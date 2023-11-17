import { motion } from "framer-motion"
import SectionTitle from "../reusable/SectionTitle"

function About({translate}: any) {
  return (
    <motion.div 
      className='flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={translate('about')}/>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        src='/images/meGundam.jpg'
        alt='Me'
        className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full 
        object-cover md:rounded-lg md:h-72 md:w-72 xl:w-[400px] xl:h-[400px]
        xs:w-[200px] xs:h-[200px]
        2xs:w-[100px] 2xs:h-[100px] 2xs:mt-10'
      />
      <div className='space-y-10 px-0 md:px-10 xs:space-y-0 2xs:space-y-2'>
        <h4 className='text-4xl font-semibold 2xs:text-[1.5rem]'>
          {translate('here')}{" "}
          <span className='underline decoration-[#1ff81f]'>
            {translate('story')}...
          </span>
        </h4>
        <p className='text-base lg:text-xl md:text-lg xs:text-md 2xs:text-xs'>
          {translate('1stParagraph')}<br/><br/>
          {translate('2ndParagraph')}
        </p>
      </div>
    </motion.div>
  )
}

export default About