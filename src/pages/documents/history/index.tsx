import { Input, Select } from 'antd'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Table, PaddingCenterTh, PaddingCenterTd, VerticalScroll } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const { Option } = Select

const GridContainerAlignCenter = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr auto;
  align-items: center;
  gap: 1rem;

  background: #e6eaed;
  border: 2px solid #dcdde6;
  padding: 1rem;
`

const searchSelectStyle = {
  minWidth: '10rem',
}

const searchInputStyle = {
  width: '50%',
  minWidth: '20rem',
}

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

const documentTableRecords = [
  {
    id: '1',
    eventTime: new Date(),
    version: '0.1',
    previousVersion: '-',
    blockId: '1',
    transactionId: '1',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '2',
    eventTime: new Date(),
    version: '0.2',
    previousVersion: '0.1',
    blockId: '2',
    transactionId: '2',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '3',
    eventTime: new Date(),
    version: '0.3',
    previousVersion: '0.2',
    blockId: '3',
    transactionId: '3',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '4',
    eventTime: new Date(),
    version: '0.4',
    previousVersion: '0.3',
    blockId: '4',
    transactionId: '4',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '5',
    eventTime: new Date(),
    version: '0.5',
    previousVersion: '0.4',
    blockId: '5',
    transactionId: '5',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '6',
    eventTime: new Date(),
    version: '1.0',
    previousVersion: '0.2',
    blockId: '6',
    transactionId: '6',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '7',
    eventTime: new Date(),
    version: '1.1',
    previousVersion: '1.0',
    blockId: '7',
    transactionId: '7',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
  {
    id: '8',
    eventTime: new Date(),
    version: '1.2',
    previousVersion: '1.1',
    blockId: '8',
    transactionId: '8',
    sender: '홍길동',
    receiver: 'XX건설',
    title: '공기지연, 배관 마감 작업',
  },
]

type Props = {
  document: {
    id: string
    eventTime: Date
    version: string
    previousVersion: string
    blockId: string
    transactionId: string
    sender: string
    receiver: string
    title: string
  }
}

function DocumentTableRecord({ document }: Props) {
  return (
    <tr>
      <StyledPaddingCenterTd>{document.eventTime.toISOString()}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.version}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.previousVersion}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>
        <ClientSideLink href={`/blocks/${document.blockId}`}>{document.blockId}</ClientSideLink>
      </StyledPaddingCenterTd>
      <StyledPaddingCenterTd>
        <ClientSideLink href={`/transactions/${document.transactionId}`}>
          {document.transactionId}
        </ClientSideLink>
      </StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.sender}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.receiver}</StyledPaddingCenterTd>
      <StyledPaddingCenterTd>{document.title}</StyledPaddingCenterTd>
    </tr>
  )
}

const description = ''

function DocumentsHistoryPage() {
  return (
    <PageHead title="이메일 블록체인 - 문서 변경이력 조회" description={description}>
      <NavigationLayout>
        <GridContainerAlignCenter>
          <h2>Step 1</h2>
          <Input.Group compact>
            <Select defaultValue="Tx ID" size="large" style={searchSelectStyle}>
              <Option value="Tx ID">Tx ID</Option>
              <Option value="Block ID">Block ID</Option>
            </Select>
            <Input.Search placeholder="Search" size="large" style={searchInputStyle} />
          </Input.Group>
        </GridContainerAlignCenter>

        <h2>문서 변경이력 조회</h2>
        <VerticalScroll>
          <StyledTable>
            <thead>
              <tr>
                <StyledPaddingCenterTh>Event Time</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Version</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Previous Version</StyledPaddingCenterTh>
                <StyledPaddingCenterTh># of Blocks</StyledPaddingCenterTh>
                <StyledPaddingCenterTh># of Transactions</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Sender</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Receiver</StyledPaddingCenterTh>
                <StyledPaddingCenterTh>Title</StyledPaddingCenterTh>
              </tr>
            </thead>
            <tbody>
              {documentTableRecords.map((document) => (
                <DocumentTableRecord key={document.id} document={document} />
              ))}
            </tbody>
          </StyledTable>
        </VerticalScroll>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsHistoryPage
