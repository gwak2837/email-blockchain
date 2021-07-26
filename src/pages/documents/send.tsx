import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import { Collapse, Input } from 'antd'
import { PrimaryButton } from 'src/components/atoms/Button'

const { Panel } = Collapse
const { Search } = Input
const { TextArea } = Input

const PaddingH4 = styled.h4`
  padding: 0.5rem;
`

const Table = styled.table`
  width: 50%;

  th,
  td {
    padding: 0.5rem;
    white-space: nowrap;
  }
  input {
    min-width: 15rem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

function Transaction() {
  return (
    <Table>
      <tr>
        <td>
          <PaddingH4>첨부파일 암호화</PaddingH4>
        </td>
        <td>
          <Input placeholder="첨부파일 암호화" size="large" />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>문서분류코드</PaddingH4>
        </td>
        <td>
          <Input size="large" />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>연관 키워드</PaddingH4>
        </td>
        <td>
          <Input size="large" />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>트랜잭션 ID</PaddingH4>
        </td>
        <td>
          <Input size="large" />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>트랜잭션 이전 ID</PaddingH4>
        </td>
        <td>
          <Search
            allowClear
            enterButton="찾아보기"
            onSearch={() => console.log('트랜잭션 이전 ID 찾아보기')}
            placeholder="input search text"
            size="large"
          />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>첨부파일 버전</PaddingH4>
        </td>
        <td>
          <Input size="large" />
        </td>
      </tr>
      <tr>
        <td>
          <PaddingH4>이전 첨부파일 버전</PaddingH4>
        </td>
        <td>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="찾아보기"
            size="large"
            onSearch={() => console.log('이전 첨부파일 버전 찾아보기')}
          />
        </td>
      </tr>
    </Table>
  )
}

const description = ''

function DocumentsSendingPage() {
  return (
    <PageHead title="이메일 블록체인 - Email & 추가입력정보" description={description}>
      <NavigationLayout>
        <Collapse defaultActiveKey={['0']}>
          <Panel header="Email" key="0">
            <Table>
              <tr>
                <td>
                  <PaddingH4>Sender ID</PaddingH4>
                </td>
                <td>
                  <Input allowClear placeholder="Sender ID" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <PaddingH4>Receiver ID</PaddingH4>
                </td>
                <td>
                  <Input allowClear placeholder="Sender ID" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <PaddingH4>Timestamp</PaddingH4>
                </td>
                <td>
                  <Input allowClear placeholder="Sender ID" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <PaddingH4>Subject</PaddingH4>
                </td>
                <td>
                  <Input allowClear placeholder="Sender ID" size="large" />
                </td>
              </tr>
              <tr>
                <td>
                  <PaddingH4>Content</PaddingH4>
                </td>
                <td>
                  <TextArea allowClear placeholder="Sender ID" size="large" />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <GridContainer>
                    <PrimaryButton>Verify</PrimaryButton>
                    <PrimaryButton>Send</PrimaryButton>
                  </GridContainer>
                </td>
              </tr>
            </Table>
          </Panel>
          {[1, 2, 3].map((i) => (
            <Panel header="추가입력정보" key={i}>
              <Transaction />
            </Panel>
          ))}
        </Collapse>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsSendingPage
