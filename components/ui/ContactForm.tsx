import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/types";

const ContactForm: React.FC<Inputs> = ({ translate }) => {

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData =>{
    window.location.href = `mailto:thegera4@hotmail.com?subject=
    ${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };

  return (
    <form 
      className='flex flex-col space-y-2 w-fit mx-auto'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex space-x-2 2xs:flex-col 2xs:space-x-0 2xs:space-y-2 md:space-y-0
      xs:flex-col xs:space-x-0 xs:space-y-2 md:flex-row md:space-x-2 lg:flex-row lg:space-x-2'>
        <input 
          { ...register("name") } 
          placeholder={translate('contactName')}
          className='contactInput' 
          type="text" 
        />
        <input 
          { ...register("email") } 
          placeholder={translate('contactEmail')}
          className='contactInput' 
          type="email" 
        />
      </div>
      <input 
        { ...register("subject") } 
        placeholder= {translate('contactSubject')}
        className='contactInput' 
        type="text" 
      />
      <textarea 
        { ...register("message") } 
        placeholder={translate('contactMessage')}
        className='contactInput'
      ></textarea>
      <button 
        type='submit'
        className='bg-[#16ac16] py-5 px-10 rounded-md font-bold'
      >
        {translate('btnSend')}
      </button>
    </form>
  )
}

export default ContactForm