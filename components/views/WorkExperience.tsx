import { motion } from "framer-motion"
//import ExperienceCard from "../ui/ExperienceCard"
import SectionTitle from "../reusable/SectionTitle"
import { jobs, trabajos } from "@/data/jobs"
//import { Swiper, SwiperSlide } from "swiper/react"
//import { Navigation } from 'swiper';
//import { useRouter } from "next/router"
import 'swiper/css';
import 'swiper/css/navigation';
import ExperienceTimeline from "../ui/ExperienceTimeline"
import { Translate } from '@/types'

const WorkExperience: React.FC<Translate> = ({ translate }) => {
  //const { locale } = useRouter()
  
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={translate('experience')} />
        <div className="max-w-7xl flex space-x-5 p-10 items-center align-middle xs:p-4 2xs:p-0">
      {/*<div className="w-full flex space-x-5 p-10 items-center align-middle xs:p-4 2xs:p-0">*/}
        {/* Swiper with experience cards */}
        {/*<Swiper  
          navigation={true}
          modules={[Navigation]} 
          style={{ 
            '--swiper-navigation-color': '#16ac16', 
            '--swiper-navigation-size': '3rem',
          } as CSSProperties}
        >
          {
          locale === 'en' ?
          jobs.map((job, index) => 
            <SwiperSlide key={index} >
              <ExperienceCard job={job} />
            </SwiperSlide>
          ) :
          trabajos.map((trabajo, index) => 
            <SwiperSlide key={index} >
              <ExperienceCard job={trabajo} />
            </SwiperSlide>
          )
          }
        </Swiper>*/}
        <ExperienceTimeline translate={translate} />
      </div>
    </motion.div>
  )
}

export default WorkExperience