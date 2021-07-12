import { UploadOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Select, Upload } from 'antd'
import { useState } from 'react'
import { CenterH2 } from 'src/components/atoms/Styles'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import Transaction from 'src/components/Transaction'
import styled from 'styled-components'
import { transaction } from 'src/models/dummy-data'

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
            <Input.Search placeholder="Search" size="large" style={searchInputStyle} />
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
            <Input placeholder="Search" size="large" style={searchInputStyle} />
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
          <p>진위 검증 성공</p>
          <Button size="large" type="primary">
            확인
          </Button>
          <Button size="large">리포트 출력</Button>
        </Modal>

        <CenterH2>진위 검증 결과</CenterH2>
        <Transaction transaction={transaction} />
      </NavigationLayout>
    </PageHead>
  )
}

export default DocumentVerificationPage
