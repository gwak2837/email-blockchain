import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = '이메일 블록체인에 회원가입 해보세요'

function RegisterPage() {
  return (
    <PageHead title="이메일 블록체인 - 회원가입" description={description}>
      <NavigationLayout>회원가입</NavigationLayout>
    </PageHead>
  )
}

export default RegisterPage
