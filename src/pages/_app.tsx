import { AppProps } from 'next/app'
import Head from 'next/head'
import { BASIC_TEXT_COLOR, LIGHT_TEXT_COLOR } from 'src/models/constants'
import { createGlobalStyle } from 'styled-components'

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
  html, 
  body {
    font-size: 16px;
  }

  body {
    padding: 0;
    color: ${BASIC_TEXT_COLOR};
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
    color: #3c8fc9;
    text-decoration: none;
    font-weight: 500;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    :hover {
      color: ${LIGHT_TEXT_COLOR}
    }
  }
`

function EmailBlockchainApp({ Component, pageProps }: AppProps) {
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
