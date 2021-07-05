import { Button, Input, Select } from 'antd'
import { useState } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { CenterH2 } from 'src/components/atoms/Styles'
import { Table, VerticalScroll } from 'src/components/atoms/Table'
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

const documentTableRecord = {
  eventTime: new Date(),
  transactionId: '1',
  sender: '홍길동',
  receiver: 'XX건설',
  description: '누락 및 간섭',
  keywords: '공기지연, 배관 마감 작업',
}

type Props = {
  document: {
    eventTime: Date
    transactionId: string
    sender: string
    receiver: string
    description: string
    keywords: string
  }
}

function DocumentTableRecord({ document }: Props) {
  return (
    <tr>
      <td>{document.eventTime.toISOString()}</td>
      <td>
        <ClientSideLink href={`/transactions/${document.transactionId}`}>
          {document.transactionId}
        </ClientSideLink>
      </td>
      <td>{document.sender}</td>
      <td>{document.receiver}</td>
      <td>{document.description}</td>
      <td>{document.keywords}</td>
    </tr>
  )
}

const description = ''

function RelatingDocumentsPage() {
  const [inputCount, setInputCount] = useState(0)

  return (
    <PageHead title="이메일 블록체인 - 연관문서 조회" description={description}>
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
        <GridContainerAlignCenter>
          <h2>Step 2</h2>
          <Input.Group compact>
            <Select defaultValue="Keyword" size="large" style={searchSelectStyle}>
              <Option value="Keyword">Keyword</Option>
              <Option value="Tx ID">Tx ID</Option>
              <Option value="Block ID">Block ID</Option>
            </Select>
            <Input.Search placeholder="Search" size="large" style={searchInputStyle} />
          </Input.Group>
          <Button onClick={() => setInputCount((prev) => prev + 1)} type="primary" size="large">
            + Add
          </Button>
          {[...Array(inputCount)].map(() => (
            <>
              <div />
              <Input.Group compact>
                <Select defaultValue="Keyword" size="large" style={searchSelectStyle}>
                  <Option value="Keyword">Keyword</Option>
                  <Option value="Tx ID">Tx ID</Option>
                  <Option value="Block ID">Block ID</Option>
                </Select>
                <Input.Search placeholder="Search" size="large" style={searchInputStyle} />
              </Input.Group>
              <div />
            </>
          ))}
        </GridContainerAlignCenter>

        <CenterH2>연관문서 조회 결과</CenterH2>
        <VerticalScroll>
          <Table>
            <thead>
              <tr>
                <th>Event Time</th>
                <th># of Transactions</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Description</th>
                <th>Keyword</th>
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
          </Table>
        </VerticalScroll>
      </NavigationLayout>
    </PageHead>
  )
}

export default RelatingDocumentsPage
