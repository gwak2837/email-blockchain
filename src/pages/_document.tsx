/* eslint-disable react/no-danger */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export const canonicalUrl = 'https://email-blockchain.vercel.app'

// 최대 10개
const keywords = '이메일,블록체인,이메일블록체인'

export default class EmailBlockchainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta name="author" content="C-Link" />
          <meta name="keywords" content={keywords} />
          <meta name="application-name" content="이메일 블록체인" />
          <meta name="theme-color" content="#26326d" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="이메일 블록체인" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="이메일 첨부파일을 블록체인으로 관리하는 곳" />
          <meta property="og:title" content="이메일 블록체인" />
          <meta property="og:description" content="이메일 첨부파일을 블록체인으로 관리하는 곳" />
          <meta property="og:image" content="/favicon.ico" />
          <meta property="og:url" content={`${canonicalUrl}`} />
          <meta property="og:site_name" content="이메일 블록체인 (Email Blockchain)" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Email Blockchain Logo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
