import ClientSideLink from 'src/components/atoms/ClientSideLink'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const PaddingCenterTd = styled.td`
  text-align: center;
  padding: 0.5rem;
`

const description = '문서관리대장'

function DocumentsPage() {
  return (
    <PageHead title="이메일 블록체인 - 문서 수발신 목록" description={description}>
      <NavigationLayout>
        <FlexContainer>
          <h2>문서 수발신 목록</h2>
          <input placeholder="Search" />
          <div>Page 1 / 50</div>
        </FlexContainer>
        <table>
          <thead>
            <tr>
              <PaddingCenterTd>Event Time</PaddingCenterTd>
              <PaddingCenterTd># of Transactions</PaddingCenterTd>
              <PaddingCenterTd># of Blocks</PaddingCenterTd>
              <PaddingCenterTd>Sender</PaddingCenterTd>
              <PaddingCenterTd>Receiver</PaddingCenterTd>
              <PaddingCenterTd>FTP Title</PaddingCenterTd>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PaddingCenterTd>{new Date().toISOString()}</PaddingCenterTd>
              <PaddingCenterTd>
                <ClientSideLink href="/blocks/1">0001</ClientSideLink>
              </PaddingCenterTd>
              <PaddingCenterTd>0001</PaddingCenterTd>
              <PaddingCenterTd>홍길동</PaddingCenterTd>
              <PaddingCenterTd>건설</PaddingCenterTd>
              <PaddingCenterTd>누락 및 간섭</PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>{new Date().toISOString()}</PaddingCenterTd>
              <PaddingCenterTd>
                <ClientSideLink href="/blocks/1">0001</ClientSideLink>
              </PaddingCenterTd>
              <PaddingCenterTd>0001</PaddingCenterTd>
              <PaddingCenterTd>홍길동</PaddingCenterTd>
              <PaddingCenterTd>건설</PaddingCenterTd>
              <PaddingCenterTd>누락 및 간섭</PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>{new Date().toISOString()}</PaddingCenterTd>
              <PaddingCenterTd>
                <ClientSideLink href="/blocks/1">0001</ClientSideLink>
              </PaddingCenterTd>
              <PaddingCenterTd>0001</PaddingCenterTd>
              <PaddingCenterTd>홍길동</PaddingCenterTd>
              <PaddingCenterTd>건설</PaddingCenterTd>
              <PaddingCenterTd>누락 및 간섭</PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>{new Date().toISOString()}</PaddingCenterTd>
              <PaddingCenterTd>
                <ClientSideLink href="/blocks/1">0001</ClientSideLink>
              </PaddingCenterTd>
              <PaddingCenterTd>0001</PaddingCenterTd>
              <PaddingCenterTd>홍길동</PaddingCenterTd>
              <PaddingCenterTd>건설</PaddingCenterTd>
              <PaddingCenterTd>누락 및 간섭</PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>{new Date().toISOString()}</PaddingCenterTd>
              <PaddingCenterTd>
                <ClientSideLink href="/blocks/1">0001</ClientSideLink>
              </PaddingCenterTd>
              <PaddingCenterTd>0001</PaddingCenterTd>
              <PaddingCenterTd>홍길동</PaddingCenterTd>
              <PaddingCenterTd>건설</PaddingCenterTd>
              <PaddingCenterTd>누락 및 간섭</PaddingCenterTd>
            </tr>
          </tbody>
        </table>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsPage
