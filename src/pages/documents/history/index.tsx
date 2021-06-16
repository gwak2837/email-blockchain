import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function DocumentsHistoryPage() {
  return (
    <PageHead title="이메일 블록체인 - 문서 변경이력 조회" description={description}>
      <NavigationLayout>문서 변경이력 조회</NavigationLayout>
    </PageHead>
  )
}

export default DocumentsHistoryPage
