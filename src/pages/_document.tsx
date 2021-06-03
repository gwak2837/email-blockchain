/* eslint-disable react/no-danger */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'src/utils/google-analytics'
import { ServerStyleSheet } from 'styled-components'

export const canonicalUrl = 'https://email-blockchain.vercel.app/'

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
          <link rel="apple-touch-startup-image" href="/splash.png" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="manifest" href="/manifest.json" />
          <meta name="author" content="C-Link" />
          <meta name="keywords" content={keywords} />
          <meta name="application-name" content="이메일 블록체인" />
          <meta name="apple-mobile-web-app-title" content="이메일 블록체인" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
