import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const FlexContainerAlignCenter = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
`

const description = ''

function DocumentsRelatingPage() {
  return (
    <PageHead title="이메일 블록체인 - 진위검증" description={description}>
      <NavigationLayout>
        <FlexContainerAlignCenter>
          <h2>Step 1</h2>
          <input placeholder="Search" />
        </FlexContainerAlignCenter>
        <h3>문서 변경이력 조회 결과</h3>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsRelatingPage
