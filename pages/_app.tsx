import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import ContentLoading from '../components/ContentLoading'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    handleLoaded()

    function handleLoaded() {
      if(document.readyState === 'complete') {
        setLoaded(true)
      }
    }

    document.addEventListener('readystatechange', handleLoaded)

    return () => {
      document.removeEventListener('readystatechange', handleLoaded)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loaded ? <Component {...pageProps} /> : <ContentLoading />}
    </>
  )
}

export default MyApp
