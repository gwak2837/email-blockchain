import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { canonicalUrl } from 'src/pages/_document'

type Props = {
  children: ReactNode
  title?: string
  description?: string // 최대 120자
}

function PageHead({
  children,
  title = '이메일 블록체인 (Email Blockchain)',
  description = '이메일 내용과 첨부 파일을 블록체인에 안전하게 보관하는 서비스입니다.',
}: Props) {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content={`${canonicalUrl}${pathname}`} />
        <meta property="og:site_name" content="이메일 블록체인" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Sindy Logo" />
      </Head>
      {children}
    </>
  )
}

export default PageHead
