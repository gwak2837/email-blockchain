import { Input, Select } from 'antd'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { CenterH2 } from 'src/components/atoms/Styles'
import { VerticalScroll, Table } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { GridContainerAlignCenter, searchSelectStyle, searchInputStyle } from './history'

const { Option } = Select

const documents = [
  {
    id: '1',
    eventTime: '2021.6.15  3:30:20 PM',
    blockId: '4',
    transactionId: '1',
    sender: 'aaa',
    receiver: 'bbb',
    subject: '공정표 계획 - 1',
    transactionHash: '36eb747829f53a5dbf83bd545247a715acece8aaf17b8571bbc4ef5fd811e336',
  },
  {
    id: '2',
    eventTime: '2021.6.15  3:30:20 PM',
    blockId: '4',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '3',
    eventTime: '2021.6.15  3:30:20 PM',
    blockId: '4',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '4',
    eventTime: '2021.6.16  2:11:42 PM',
    blockId: '6',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '5',
    eventTime: '2021.6.16  2:11:42 PM',
    blockId: '6',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '6',
    eventTime: '2021.6.16  2:11:42 PM',
    blockId: '6',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '7',
    eventTime: '2021.6.16  2:11:42 PM',
    blockId: '6',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '8',
    eventTime: '2021.6.16  3:24:39 PM',
    blockId: '7',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '9',
    eventTime: '2021.6.16  3:24:39 PM',
    blockId: '7',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '10',
    eventTime: '2021.6.16  3:24:39 PM',
    blockId: '7',
    transactionId: '1',
    sender: 'aaa',
    receiver: 'bbb',
    subject: '공정표 계획 - 1',
    transactionHash: '36eb747829f53a5dbf83bd545247a715acece8aaf17b8571bbc4ef5fd811e336',
  },
  {
    id: '11',
    eventTime: '2021.6.18  3:31:31 PM',
    blockId: '11',
    transactionId: '1',
    sender: 'aaa',
    receiver: 'bbb',
    subject: '공정표 계획 - 1',
    transactionHash: '36eb747829f53a5dbf83bd545247a715acece8aaf17b8571bbc4ef5fd811e336',
  },
  {
    id: '12',
    eventTime: '2021.6.18  3:31:31 PM',
    blockId: '11',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '13',
    eventTime: '2021.6.18  3:31:31 PM',
    blockId: '11',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '14',
    eventTime: '2021.6.18  3:31:31 PM',
    blockId: '11',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '15',
    eventTime: '2021.6.18  4:21:59 PM',
    blockId: '15',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '16',
    eventTime: '2021.6.18  4:21:59 PM',
    blockId: '15',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '17',
    eventTime: '2021.6.18  4:21:59 PM',
    blockId: '15',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '18',
    eventTime: '2021.6.18  4:21:59 PM',
    blockId: '15',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '19',
    eventTime: '2021.6.18  4:21:59 PM',
    blockId: '15',
    transactionId: '2',
    sender: 'bbb',
    receiver: 'aaa',
    subject: '건설자재 시험성과표',
    transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
]

type Props = {
  document: {
    id: string
    eventTime: string
    blockId: string
    transactionId: string
    sender: string
    receiver: string
    subject: string
    transactionHash: string
  }
}

function DocumentTableRecord({ document }: Props) {
  return (
    <tr>
      <td>{document.eventTime}</td>
      <td>
        <ClientSideLink href={`/blocks/${document.blockId}`}>{document.blockId}</ClientSideLink>
      </td>
      <td>{document.transactionId}</td>
      <td>{document.sender}</td>
      <td>{document.receiver}</td>
      <td>{document.subject}</td>
      <td>{document.transactionHash}</td>
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
                <th># Block</th>
                <th># Tx</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Subject</th>
                <th>Tx ID</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((document) => (
                <DocumentTableRecord key={document.id} document={document} />
              ))}
            </tbody>
          </Table>
        </VerticalScroll>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsPage
