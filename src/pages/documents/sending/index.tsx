import React from 'react'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import { Collapse } from 'antd'

const { Panel } = Collapse

const PaddingH2 = styled.h2`
  padding: 0.5rem;
`

const PaddingH4 = styled.h4`
  padding: 0.5rem;
`

function Transaction() {
  return (
    <>
      <table>
        <tr>
          <td>
            <PaddingH4>첨부파일 설명</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>첨부파일</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>문서분류코드</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>연관 키워드</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>문서 버전</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>이전 트랜잭션 문서 버전</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>트랜잭션 번호</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
        <tr>
          <td>
            <PaddingH4>이전 트랜잭션 번호</PaddingH4>
          </td>
          <td>
            <input />
          </td>
        </tr>
      </table>
    </>
  )
}

const description = ''

function DocumentsSendingPage() {
  return (
    <PageHead title="이메일 블록체인 - FTP 문서 발신" description={description}>
      <NavigationLayout>
        <Collapse defaultActiveKey={['0']}>
          <Panel header="필수 입력 항목" key="0">
            <table>
              <tr>
                <td>
                  <PaddingH4>Receiver</PaddingH4>
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>
                  <PaddingH4>FTP Title</PaddingH4>
                </td>
                <td>
                  <input />
                </td>
              </tr>
            </table>
          </Panel>
          <Panel header="Transaction 1" key="1">
            <Transaction />
          </Panel>
          <Panel header="Transaction 2" key="2">
            <Transaction />
          </Panel>
          <Panel header="Transaction 3" key="3">
            <Transaction />
          </Panel>
        </Collapse>
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentsSendingPage
