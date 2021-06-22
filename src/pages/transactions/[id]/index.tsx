import { useRouter } from 'next/router'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import Transaction from 'src/components/Transaction'

const description = ''

function TransactionPage() {
  const { query } = useRouter()

  return (
    <PageHead title="이메일 블록체인 - " description={description}>
      <NavigationLayout>
        <h2>트랜잭션 상세</h2>
        <Transaction transaction />
      </NavigationLayout>
    </PageHead>
  )
}

export default TransactionPage
