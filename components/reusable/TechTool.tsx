import Image from "next/image"
import Tooltip from "../ui/Tooltip"

type Props = { 
  directionLeft?: boolean,
  path: string,
  alt: string,
}

function TechTool({ path, alt }: Props) {
  return (
    <>
    <div className="group relative flex cursor-default">
      <Tooltip tooltip={alt}>
        <Image
          src={path}
          alt={alt}
          width={100}
          height={100}
          className="object-contain filter group-hover:grayscale 
          transition duration-300 ease-in-out 
          lg:w-20 lg:h-17 
          sm:w-14 sm:h-14 
          xs:w-12 xs:h-12"
        />
      </Tooltip>
    </div>
    </>
  )
}

export default TechTool