type Props = { title: string}

function SectionTitle({ title }: Props) {
  return (
    <h3 
    className='absolute top-24 uppercase tracking-[20px]
    text-gray-500 text-2xl 2xs:text-sm'
    >
      {title}
    </h3>
  )
}

export default SectionTitle