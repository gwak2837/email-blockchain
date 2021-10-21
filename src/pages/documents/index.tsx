import { Button, Input, Select } from 'antd'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { CenterH2, RelativePosition } from 'src/components/atoms/Styles'
import { Table, VerticalScroll } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { documents } from 'src/models/dummy-data'
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
