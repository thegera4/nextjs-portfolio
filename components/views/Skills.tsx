import SectionTitle from "../reusable/SectionTitle"
import { motion } from "framer-motion"
import TechTool from "../reusable/TechTool"
import { myTechStack } from "@/constants/technologies"
import { Translate } from "@/types"

const Skills: React.FC<Translate> = ({ translate }) => {
  return (
    <motion.div 
      className="flex relative flex-col text-center xl:flex-row max-w-[2000px] 
      min-h-screen justify-center mx-auto items-center xl:space-y-0 xl:px-10
      lg:mt-0 md:text-left md:mt-10 sm:mt-[-200px] xs:mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={translate('skills')} />
      <h3 className="absolute top-36 uppercase tracking-[3px] text-white text-sm 
      md:tacking-[3px] xs:tracking-[2px]"
      >
        {translate('techStack')}
      </h3>
      <div className="grid grid-cols-4 gap-5 space-x-2 lg:gap-6 lg:mt-32
      md:gap-10 md:mt-10 sm:mt-56 xs:mt-44"
      >
        {myTechStack.map((tech, index) => (
          <TechTool key={index} path={tech.path} alt={tech.alt} />
        ))}
      </div>
    </motion.div>
  )  
}

export default Skills