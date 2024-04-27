import { motion } from "framer-motion"
import SectionTitle from "../reusable/SectionTitle"

function About({translate}: any) {
  return (
    <motion.div 
      className='flex flex-col relative h-screen text-center 
      lg:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
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
        className='-mb-20 flex-shrink-0 h-56 w-56 rounded-lg object-cover 
        xl:w-[400px] xl:h-[400px]
        lg:mt-0 lg:w-96 lg:h-96
        md:h-72 md:w-72 md:mb-0
        xs:w-[300px] xs:h-[250px] xs:mt-36'
      />
      <div className='space-y-10 px-0 md:px-10 xs:space-y-0'>
        <h4 className='text-4xl font-semibold 
        md:mt-0
        xs:text-3xl xs:mt-24 xs:mb-4'>
          {translate('here')}{" "}
          <span className='underline decoration-[#1ff81f]'>{translate('story')}...</span>
        </h4>
        <p className='text-base lg:text-xl md:text-lg xs:text-sm text-left'>
          {translate('1stParagraph')}<br/><br/>
          {translate('2ndParagraph')}
        </p>
      </div>
    </motion.div>
  )
}

export default About