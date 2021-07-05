import { Input, Select } from 'antd'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { CenterH2 } from 'src/components/atoms/Styles'
import { VerticalScroll, Table } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { GridContainerAlignCenter, searchSelectStyle, searchInputStyle } from './history'

const { Option } = Select

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
      <td>{document.eventTime.toISOString()}</td>
      <td>
        <ClientSideLink href={`/blocks/${document.blockId}`}>{document.blockId}</ClientSideLink>
      </td>
      <td>{document.transactionId}</td>
      <td>{document.sender}</td>
      <td>{document.receiver}</td>
      <td>{document.title}</td>
    </tr>
  )
}

const description = '문서관리대장'

function DocumentsPage() {
  return (
    <PageHead title="이메일 블록체인 - 문서 수발신 목록" description={description}>
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

        <CenterH2>문서 수발신 목록</CenterH2>
        <VerticalScroll>
          <Table>
            <thead>
              <tr>
                <th>Event Time</th>
                <th># of Blocks</th>
                <th># of Transactions</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Email Title</th>
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

export default DocumentsPage
