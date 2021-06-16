import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function DocumentsSendingPage() {
  return (
    <PageHead title="이메일 블록체인 - FTP 문서 발신" description={description}>
      <NavigationLayout>FTP 문서 발신</NavigationLayout>
    </PageHead>
  )
}

export default DocumentsSendingPage
