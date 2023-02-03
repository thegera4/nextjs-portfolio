import { motion } from "framer-motion"
import Image from "next/image"
import Tooltip from "../ui/Tooltip"

type Props = { 
  directionLeft?: boolean,
  path: string,
  alt: string,
}

function TechTool({ directionLeft, path, alt }: Props) {
  return (
    <>
    {/* <div className="group relative flex cursor-default ">
      <Tooltip tooltip={alt}>
        <Image 
          src={path}
          alt={alt}
          height={50}
          width={50}
          className="object-fit: w-13 h-10 lg:w-50 xl:h-50 filter 
          group-hover:grayscale transition duration-300 ease-in-out
          2xs:w-6 2xs:h-6 "
        />
      </Tooltip>
    </div> */}
    <div className="group relative flex cursor-default">
      <Tooltip tooltip={alt}>
        <motion.img 
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          src={path}
          alt={alt}
          className="object-fit: w-13 h-10 lg:w-50 xl:h-50 filter 
          group-hover:grayscale transition duration-300 ease-in-out
          2xs:w-6 2xs:h-6 "
        />
      </Tooltip>
    </div>
    </>
  )
}

export default TechTool