import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = '문서관리대장'

function DocumentsPage() {
  return (
    <PageHead title="이메일 블록체인 - 문서 수발신 목록" description={description}>
      <NavigationLayout>문서 수발신 목록</NavigationLayout>
    </PageHead>
  )
}

export default DocumentsPage
