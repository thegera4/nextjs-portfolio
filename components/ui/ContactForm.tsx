import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

function ContactForm({}: Props) {
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
      <div className='flex space-x-2'>
        <input 
          { ...register("name") } 
          placeholder='Name' 
          className='contactInput' 
          type="text" 
        />
        <input 
          { ...register("email") } 
          placeholder='Email' 
          className='contactInput' 
          type="email" 
        />
      </div>
      <input 
        { ...register("subject") } 
        placeholder='Subject' 
        className='contactInput' 
        type="text" 
      />
      <textarea 
        { ...register("message") } 
        placeholder='Your Message' 
        className='contactInput'
      ></textarea>
      <button 
        type='submit'
        className='bg-[#16ac16] py-5 px-10 rounded-md font-bold'
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm