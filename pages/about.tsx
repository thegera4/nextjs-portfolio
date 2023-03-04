import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {}

const About = (props: Props) => {
  const {locale, locales, push} = useRouter()
  const { t: translate } = useTranslation('about')

  return (
    <div>
      <h1>About Page</h1>
      <h2>{translate('helloWorld')}</h2>
      <h2>Current locale: {locale} </h2>
      <button
        type='button'
        className='bg-[#16ac16] text-white p-2 rounded-md ml-2'
        onClick={() => push('/')}
      >
        Go back
      </button>
    </div>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about'])),
  },
})

export default About