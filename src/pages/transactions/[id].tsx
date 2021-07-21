import { useRouter } from 'next/router'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import Transaction from 'src/components/Transaction'
import { transaction } from 'src/models/dummy-data'

const description = ''

function TransactionPage() {
  const { query } = useRouter()

  const title = `이메일 블록체인 - 트랜잭션 ${query.id ?? ''}`

  return (
    <PageHead title={title} description={description}>
      <NavigationLayout>
        <h2>트랜잭션 상세</h2>
        <Transaction transaction={transaction} />
      </NavigationLayout>
    </PageHead>
  )
}

export default TransactionPage
