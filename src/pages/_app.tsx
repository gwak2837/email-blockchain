import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { createContext, ReactNode, useEffect } from 'react'
import { CHOCO_COLOR, DARK_CHOCO_COLOR, TABLET_MIN_WIDTH } from 'src/models/constants'
import { pageview } from 'src/utils/google-analytics'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'animate.css/animate.min.css'
import { ToastContainer, cssTransition } from 'react-toastify'

export const fade = cssTransition({
  enter: 'animate__animated animate__fadeIn',
  exit: 'animate__animated animate__fadeOut',
})

const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: ${TABLET_MIN_WIDTH}) {
      font-size: 14px;
    }
  }

  body {
    padding: 0;
    color: ${DARK_CHOCO_COLOR};
    font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Roboto',
      'Helvetica Neue', sans-serif;
    line-height: normal;
    word-break: keep-all;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  li {
    list-style-type: none
  }

  a {
    color: ${DARK_CHOCO_COLOR};
    text-decoration: none;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    :hover {
      color: ${CHOCO_COLOR}
    }
  }
`

function EmailBlockchainApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Google Analytics로 정보 보내기
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => pageview(url)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={2500} hideProgressBar position="top-center" transition={fade} />
    </>
  )
}

export default EmailBlockchainApp
