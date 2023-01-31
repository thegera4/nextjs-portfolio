import Image from "next/image"
type Props = { path: string; alt: string}

function TechIcon({ path, alt }: Props) {
  return (
    <Image
      src='/images/js.png'
      alt='JavaScript'
      width={50}
      height={50}
      className='rounded-full h-10 w-10'
    />
  )
}

export default TechIcon