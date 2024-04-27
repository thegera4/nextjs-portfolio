import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights route={router.pathname} />
    </>
  )
}

export default appWithTranslation(App)