import { UploadOutlined } from '@ant-design/icons'
import { Input, Upload, Button } from 'antd'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { GridContainerAlignCenter } from './documents/history'

const searchInputStyle = {
  width: '50%',
  minWidth: '20rem',
}

const description = ''

function SendingEmailPage() {
  return (
    <PageHead title="이메일 블록체인 - 이메일 보내기" description={description}>
      <NavigationLayout>
        <GridContainerAlignCenter>
          <h3>받는 사람</h3>
          <Input
            placeholder="블록체인에 저장된 이벤트 선택"
            size="large"
            style={searchInputStyle}
          />
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>참조</h3>
          <Input
            placeholder="블록체인에 저장된 이벤트 선택"
            size="large"
            style={searchInputStyle}
          />
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>제목</h3>
          <Input
            placeholder="블록체인에 저장된 이벤트 선택"
            size="large"
            style={searchInputStyle}
          />
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>파일 첨부</h3>
          <Input placeholder="파일 업로드" size="large" style={searchInputStyle} />
          <Upload>
            <Button icon={<UploadOutlined />} size="large">
              Upload
            </Button>
          </Upload>
        </GridContainerAlignCenter>
      </NavigationLayout>
    </PageHead>
  )
}

export default SendingEmailPage
