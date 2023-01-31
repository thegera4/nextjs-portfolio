import { motion } from "framer-motion"

type Props = { 
  directionLeft?: boolean,
  path: string,
  alt: string,
}

function TechTool({ directionLeft, path, alt }: Props) {
  return (
    <div className="group relative flex cursor-default">
      <motion.img 
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={path}
        alt={alt}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 
        ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition 
      duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 
      rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{alt}</p>
        </div>
      </div>
    </div>
  )
}

export default TechTool