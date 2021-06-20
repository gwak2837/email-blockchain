import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { PaddingCenterTd, VerticalScroll, Table, PaddingCenterTh } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledTable = styled(Table)`
  margin: 1rem;
  border: 2px solid #eee;
`

const StyledPaddingCenterTh = styled(PaddingCenterTh)`
  border: 2px solid #eee;
`

const StyledPaddingCenterTd = styled(PaddingCenterTd)`
  border: 2px solid #eee;
`

const documentTableRecord = {
  eventTime: new Date(),
  blockId: '1',
  transactionId: '1',
  sender: '홍길동',
  receiver: 'XX건설',
  title: '누락 및 간섭',
}

type Props = {
  document: {
    eventTime: Date
    transactionId: string
    blockId: string
    sender: string
    receiver: string
    title: string
  }
}

function DocumentTableRecord({ document }: Props) {
  return (
    <tr>
      <StyledPaddingCenterTd>{document.eventTime.toISOString()}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>
        <ClientSideLink href={`/blocks/${document.blockId}`}>{document.blockId}</ClientSideLink>
      </StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.transactionId}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.sender}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.receiver}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.title}</StyledPaddingCenterTd>
    </tr>
  )
}

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
        <VerticalScroll>
          <StyledTable>
            <thead>
              <tr>
                <StyledPaddingCenterTh>Event Time</StyledPaddingCenterTh>
                <StyledPaddingCenterTh># of Blocks</StyledPaddingCenterTh>
                <StyledPaddingCenterTh># of Transactions</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Sender</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Receiver</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>FTP Title</StyledPaddingCenterTh>
              </tr>
            </thead>
            <tbody>
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
              <DocumentTableRecord document={documentTableRecord} />
            </tbody>
          </StyledTable>
        </VerticalScroll>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsPage
