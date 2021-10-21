import { Button, Input, Select } from 'antd'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { CenterH2, RelativePosition } from 'src/components/atoms/Styles'
import { Table, VerticalScroll } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { downloadObjectsToCsvFile } from 'src/utils/commons'
import styled from 'styled-components'

import { GridContainerAlignCenter, searchInputStyle, searchSelectStyle } from './history'

const { Option } = Select

export const AbsolutePositionRight = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`

const documents = [
  {
    id: '1',
    eventTime: '2021.10.20. 16:50',
    blockId: '1',
    transactionId: '1',
    sender: 'greedycatty@gmail.com',
    // receiver: 'bbb',
    // subject: '공정표 계획 - 1',
    // transactionHash: '36eb747829f53a5dbf83bd545247a715acece8aaf17b8571bbc4ef5fd811e336',
  },
  {
    id: '2',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '건설자재 시험성과표',
    // transactionHash: '9b4a2bc00edb4c6874fb3f784744c10e6b4d95edd6779590219a092b3976e6e9',
  },
  {
    id: '3',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'ddd',
    // subject: '건설자재운송계약서',
    // transactionHash: '7be315a52ddd0f13cf4204d36a6b39d93b1212f6375dc108decd44fcbd46674d',
  },
  {
    id: '4',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '건축 토목공사 견적서',
    // transactionHash: '3acb80646d4d27d1b18f6c689442ed8363943dc2ae83b89e834b0bba17deeaba',
  },
  {
    id: '5',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'ddd',
    // subject: '건설자재 관리대장',
    // transactionHash: '527b9bd119d25cb0ad752280a0a2d3442fcb482bbafe534cc01eba1255ce452a',
  },
  {
    id: '6',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '표준 건축공사 견적서',
    // transactionHash: 'e7d8d160f3fb17d0dd32767067828f866f4ddc04d25103dbffae216dff54876c',
  },
  {
    id: '7',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'bbb',
    // subject: '공정표 계획 - 2',
    // transactionHash: 'e9eb6dd7666b72a49bd55146a5a927456b34bc39050879d19e5f6844b4a81ca2',
  },
  {
    id: '8',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '공사 감독일지 - 1',
    // transactionHash: '7aca04725fd0aff2f9e7ebaef9c2bb9af37bd3e71c3a7c43d0662aca4e4bf35f',
  },
  {
    id: '9',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'bbb',
    // subject: '공정표 계획 - 2_2',
    // transactionHash: '6f9a7b8ae6219f1d46b25cd16c5d2afe07af9a88f1654ad6b346e130d08bfae1',
  },
  {
    id: '10',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'ccc',
    // subject: '견적서 수정 요청',
    // transactionHash: 'b88cc6efd05280d6cb464ee189331f78e14a90958bfab7ca642363ee1b463535',
  },
  {
    id: '11',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'ddd',
    // subject: '건설기계 점검 및 정비견적서',
    // transactionHash: '67f10d435de3ee7014677e5ff39265f8f8b859f6524a20d8f96f1e01bb97e8b4',
  },
  {
    id: '12',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '공사 감독일지 - 2',
    // transactionHash: 'c1e93a735312d45a5ab1aa80ee49df991b3ad439e15428da8801a785ce6c9bfc',
  },
  {
    id: '13',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '공정표 계획 수정 요청',
    // transactionHash: 'b8f42b61a9a13fb9b1099688d24bca7ec76b64966f0eebe14a9ef71fe4704d5f',
  },
  {
    id: '14',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '(수정) 건축 토목공사 견적서',
    // transactionHash: '72df784aa500911d7922757be7b4e641ccd0745420d9a8ed9e345ca8e107a642',
  },
  {
    id: '15',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'bbb',
    // subject: '공정표 계획 - 3',
    // transactionHash: '46ed78dc97d2605b39738afee99e0bfcf3cf00fa094e35c321567dbfe8657b57',
  },
  {
    id: '16',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'ccc',
    // subject: '견적서 수정 요청',
    // transactionHash: 'e16dbfa6410f51c8ea775cdd1ca4e44e843379edc175f882b65da07bcc6d7a39',
  },
  {
    id: '17',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '공정표 계획 수정 요청',
    // transactionHash: 'a6a6fb07d221eaf60b22544d7cc652d6027bb5749ac1c553bf3d1a47d7a7dba0',
  },
  {
    id: '18',
    eventTime: '',
    blockId: '',
    transactionId: '',
    sender: '',
    // receiver: 'aaa',
    // subject: '(수정) 표준 건축공사 견적서',
    // transactionHash: '22e4d7b02a883b83b996b51406ff63243a0f48817714611b177db209ce4edb72',
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

function DocumentTableRecord({ document }: Record<string, any>) {
  return (
    <tr>
      <td>{document.eventTime}</td>
      <td>
        <ClientSideLink href={`/blocks/${document.blockId}`}>{document.blockId}</ClientSideLink>
      </td>
      <td>
        <ClientSideLink href={`/transactions/${document.transactionId}`}>
          {document.transactionId}
        </ClientSideLink>
      </td>
      <td>{document.sender}</td>
      <td>{document.receiver}</td>
      <td>{document.subject}</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
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

        <RelativePosition>
          <CenterH2>문서 수발신 목록</CenterH2>
          <AbsolutePositionRight>
            <Button
              onClick={() => downloadObjectsToCsvFile(documents, '문서 수발신 목록')}
              size="large"
            >
              문서 추출하기
            </Button>
          </AbsolutePositionRight>
        </RelativePosition>

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
                <th>문서분류코드</th>
                <th>연관 키워드</th>
                <th>트랜잭션 ID</th>
                <th>트랜잭션 이전 ID</th>
                <th>첨부파일 버전</th>
                <th>첨부파일 이전 버전</th>
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
