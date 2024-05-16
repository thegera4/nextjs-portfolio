import { motion } from "framer-motion"
import SectionTitle from "../reusable/SectionTitle"
import 'swiper/css';
import 'swiper/css/navigation';
import ExperienceTimeline from "../ui/ExperienceTimeline"
import { Translate } from '@/types'

const WorkExperience: React.FC<Translate> = ({ translate }) => {
  
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left 
      lg:mt-0 md:flex-row md:mt-40 max-w-full px-10 justify-evenly mx-auto items-center
      sm:mt-60 xs:mt-48 xs:h-[1100px]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={translate('experience')} />
      <div className="max-w-7xl flex mt-24 space-x-5 p-10 items-center align-middle xs:p-4 xs:mt-16 sm:mt-0">
        <ExperienceTimeline translate={translate} />
      </div>
    </motion.div>
  )
}

export default WorkExperience