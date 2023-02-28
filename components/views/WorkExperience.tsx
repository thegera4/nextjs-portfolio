import { motion } from "framer-motion"
import ExperienceCard from "../ui/ExperienceCard"
import SectionTitle from "../reusable/SectionTitle"
import { jobs } from "@/data/jobs"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { CSSProperties } from "react"


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      className='h-screen flex relative overflow-hidden flex-col text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title='Experience' />
      <div className="w-full flex space-x-5 p-10 items-center align-middle
      xs:p-4 2xs:p-0">
        <Swiper  
          navigation={true}
          modules={[Navigation]} 
          style={{ 
            '--swiper-navigation-color': '#16ac16', 
            '--swiper-navigation-size': '3rem',

          } as CSSProperties}
        >
          {jobs.map((job, index) => 
            <SwiperSlide 
              key={index}
            >
              <ExperienceCard job={job} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default WorkExperience