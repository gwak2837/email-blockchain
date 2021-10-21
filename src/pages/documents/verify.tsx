import { UploadOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Select, Upload } from 'antd'
import { useState } from 'react'
import { CenterH2 } from 'src/components/atoms/Styles'
import { Table } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import Transaction from 'src/components/Transaction'
import { transaction } from 'src/models/dummy-data'
import styled from 'styled-components'

import { GridContainerAlignCenter } from './history'

const { Option } = Select

const GridContainerCenterCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;

  h3 {
    text-align: center;
    grid-column: 1 / span 2;
  }
`

const VerticalScroll = styled.div`
  height: 6rem;
  margin: 2rem 0 0;
  overflow: scroll;
  position: relative;
`

const searchSelectStyle = {
  minWidth: '10rem',
}

const searchInputStyle = {
  width: '50%',
  minWidth: '20rem',
}

const description = ''

function DocumentVerificationPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function showModal() {
    setIsModalVisible(true)
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  return (
    <PageHead title="이메일 블록체인 - 진위검증" description={description}>
      <NavigationLayout>
        <GridContainerAlignCenter>
          <h2>Step 1</h2>
          <Input.Group compact>
            <Select defaultValue="Tx ID" size="large" style={searchSelectStyle}>
              <Option value="Tx ID">Tx ID</Option>
              <Option value="Block ID">Block ID</Option>
            </Select>
            <Input.Search
              placeholder="블록체인에 저장된 이벤트 선택"
              size="large"
              style={searchInputStyle}
            />
          </Input.Group>
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h2>Step 2</h2>
          <Input.Group compact>
            <Select defaultValue="Hash" size="large" style={searchSelectStyle}>
              <Option value="Hash">Hash</Option>
              <Option value="Keyword">Keyword</Option>
              <Option value="Tx ID">Tx ID</Option>
              <Option value="Block ID">Block ID</Option>
            </Select>
            <Input placeholder="파일 업로드" size="large" style={searchInputStyle} />
            <Upload>
              <Button icon={<UploadOutlined />} size="large">
                Upload
              </Button>
            </Upload>
          </Input.Group>
          <Button onClick={showModal} size="large" type="primary">
            검증하기
          </Button>
        </GridContainerAlignCenter>

        <Modal centered footer={null} onCancel={closeModal} visible={isModalVisible}>
          <GridContainerCenterCenter>
            <h3>진위 검증 성공</h3>
            <Button block onClick={closeModal} size="large" type="primary">
              확인
            </Button>
            <Button block size="large">
              리포트 출력
            </Button>
          </GridContainerCenterCenter>

          <VerticalScroll>
            <Table>
              <thead>
                <tr />
              </thead>
              <tbody>
                <tr>
                  <td>진위검증 대상 해시값</td>
                  <td>a6a6fb07d221eaf60b22544d7cc652d6027bb5749ac1c553bf3d1a47d7a7dba0</td>
                </tr>
                <tr>
                  <td>블록체인 원본 해시값</td>
                  <td>a6a6fb07d221eaf60b22544d7cc652d6027bb5749ac1c553bf3d1a47d7a7dba0</td>
                </tr>
              </tbody>
            </Table>
          </VerticalScroll>
        </Modal>

        {/* <CenterH2>진위 검증 결과</CenterH2>
        <Transaction transaction={transaction} /> */}
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentVerificationPage
