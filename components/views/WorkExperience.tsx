import { motion } from "framer-motion"
import ExperienceCard from "../ui/ExperienceCard"
import SectionTitle from "../reusable/SectionTitle"

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      className='h-screen flex relative overflow-hidden flex-col text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <SectionTitle title='Experience' />
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
      snap-mandatory scrollbar-thin scrollbar-thumb-[#16ac16]/80 
      scrollbar-track-[rgb(36,36,36)] scrollbar-rounded-1">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience