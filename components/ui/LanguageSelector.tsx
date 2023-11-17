import { useRouter } from 'next/router'

const LanguageSelector: React.FC = () => {
  const { locale, push } = useRouter()

  return (
    <div className='flex ml-5'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6 mt-1.5 text-white sm:visible "
      >
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" 
        />
      </svg>
      <select
        title='Select Language'
        className='bg-[#242424] text-white cursor-pointer max-w-xs text-sm border-none'
        value={locale}
        onChange={(e) => push('/', '/', { locale: e.target.value })}
      >
        <option 
          value="en"
          className='bg-transparent text-gray-400 cursor-pointer'
        >
          EN
        </option>
        <option 
          value="es"
          className='bg-transparent text-gray-400 cursor-pointer'
        >
          ES
        </option>
      </select>
    </div>
  )
}

export default LanguageSelector