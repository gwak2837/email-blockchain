import { useRouter } from 'next/router'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function TransactionPage() {
  const { query } = useRouter()

  return (
    <PageHead title="이메일 블록체인 - " description={description}>
      <NavigationLayout>{query.id}</NavigationLayout>
    </PageHead>
  )
}

export default TransactionPage
