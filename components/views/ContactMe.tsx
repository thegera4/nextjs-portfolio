
import ContactPiece from '../reusable/ContactPiece'
import SectionTitle from '../reusable/SectionTitle'
import ContactForm from '../ui/ContactForm'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <SectionTitle title='Get in touch' />
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          What can I do for you?{" "} 
          <span className='decoration-[#16ac16]/50 underline'>
            Let me know.
          </span>
        </h4>
        <div className='space-y-10'>
          <ContactPiece icon="phone" text="+52-87-12-75-95-53" />
          <ContactPiece icon="email" text="thegera4@hotmail.com" />
          <ContactPiece icon="pin" text="Torreon, Coahuila, Mexico" />
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe