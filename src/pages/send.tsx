import { UploadOutlined } from '@ant-design/icons'
import { Input, Upload, Button } from 'antd'
import { useRef } from 'react'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { GridContainerAlignCenter } from './documents/history'
import { Editor } from '@tinymce/tinymce-react'

const searchInputStyle = {
  width: '50%',
  minWidth: '20rem',
}

const init = {
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image',
    'charmap print preview anchor help',
    'searchreplace visualblocks code',
    'insertdatetime media table paste wordcount',
  ],
  toolbar:
    'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help',
}

const description = ''

function SendingEmailPage() {
  const contentRef = useRef('')

  function sendEmail() {
    console.log(contentRef.current)
  }

  function handleEditorChange(e: any) {
    contentRef.current = e.target.getContent()
  }

  return (
    <PageHead title="이메일 블록체인 - 이메일 보내기" description={description}>
      <NavigationLayout>
        <GridContainerAlignCenter>
          <h3>받는 사람</h3>
          <Input placeholder="받는사람" size="large" style={searchInputStyle} />
          <Button onClick={sendEmail} size="large" type="primary">
            보내기
          </Button>
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>참조</h3>
          <Input placeholder="참조" size="large" style={searchInputStyle} />
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>제목</h3>
          <Input placeholder="제목" size="large" style={searchInputStyle} />
        </GridContainerAlignCenter>
        <GridContainerAlignCenter>
          <h3>파일 첨부</h3>
          <Upload>
            <Button icon={<UploadOutlined />} size="large">
              Upload
            </Button>
          </Upload>
        </GridContainerAlignCenter>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
          initialValue="<p>Initial content</p>"
          init={init}
          onChange={handleEditorChange}
        />
      </NavigationLayout>
    </PageHead>
  )
}

export default SendingEmailPage
