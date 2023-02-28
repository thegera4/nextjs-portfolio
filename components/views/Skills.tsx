import SectionTitle from "../reusable/SectionTitle"
import { motion } from "framer-motion"
import TechTool from "../reusable/TechTool"
import { myTechStack } from "@/constants/technologies"

type Props = {}

function Skills({}: Props) {

  return (
    <motion.div 
        className="flex relative flex-col text-center md:text-left xl:flex-row 
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto 
        items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
    >
      <SectionTitle title='Skills' />
      <h3 className="absolute top-36 uppercase tracking-[3px]
       text-gray-500 text-sm">
          The tech stack that I have used:
      </h3>
      <div className="grid grid-cols-4 gap-5 space-x-2 lg:gap-6 2xs:mt-20 ">
        {myTechStack.map((tech, index) => (
          <TechTool 
            key={index} 
            directionLeft={index % 2 === 0} 
            path={tech.path} 
            alt={tech.alt} 
          />
        ))}
      </div>
    </motion.div>
  )  
}

export default Skills