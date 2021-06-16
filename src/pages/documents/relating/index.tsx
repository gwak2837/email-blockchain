import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function DocumentsRelatingPage() {
  return (
    <PageHead title="이메일 블록체인 - 연관문서 조회" description={description}>
      <NavigationLayout>연관문서 조회</NavigationLayout>
    </PageHead>
  )
}

export default DocumentsRelatingPage
