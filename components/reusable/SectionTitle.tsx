import { SectionTitle } from "@/types"

const SectionTitle: React.FC<SectionTitle> = ({ title }) => {
  
  return (
    <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl 2xs:text-sm'>
      {title}
    </h3>
  )
}

export default SectionTitle