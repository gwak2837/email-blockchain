import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'

const Table = styled.table`
  margin: 1rem;
  padding: 1rem;
  width: 100%;

  th,
  td {
    border: 2px solid #eee;
    white-space: nowrap;
    padding: 0.5rem;
    text-align: center;
  }
`

const description = ''

function TestPage() {
  return (
    <PageHead title="이메일 블록체인 - " description={description}>
      <NavigationLayout>
        <h2>연관문서 조회 결과</h2>
        <Table>
          <thead>
            <tr>
              <th>asdfasdfdsfsdfs1</th>
              <th>1sadfsdfasdfsdfsafsfs sadfsad sadf sadfsdfs fasd s dsfsd </th>
              <th>1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
      </NavigationLayout>
    </PageHead>
  )
}

export default TestPage
