import styled from 'styled-components'

import ClientSideLink from './atoms/ClientSideLink'
import { PaddingLeftTd, PaddingRightTd, Table, VerticalScroll } from './atoms/Table'

const VerticalScroll60 = styled(VerticalScroll)`
  height: 60%;
`

const StyledTable = styled(Table)`
  tbody > tr:nth-child(1) > td {
    border-top: 2px solid #094e97;
  }
`

const StyledPaddingRightTd = styled(PaddingRightTd)`
  background: #f0f0f0;
  border-width: 0 2px 2px 0;
  border-style: solid;
  border-color: #dcdde6;
  width: 15rem;
  min-width: 15rem;
`

const StyledPaddingLeftTd = styled(PaddingLeftTd)`
  border-bottom: 2px solid #f0f0f0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 650px;
`

type Props = {
  transaction: {
    description: string
    descriptionHash: string
    code: string
    keywords: string
    id: string
    previousTransactionId: string
    version: string
    previousVersion: string
  }
}

function Transaction({ transaction }: Props) {
  return (
    <VerticalScroll60>
      <StyledTable>
        <thead />
        <tbody>
          <tr>
            <StyledPaddingRightTd>첨부파일 해시</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.descriptionHash}</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>문서분류코드</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.code}</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>연관 키워드</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.keywords}</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>트랜잭션 ID</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.id}</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>이전 트랜잭션 ID</StyledPaddingRightTd>
            <StyledPaddingLeftTd>
              <ClientSideLink href={`/transactions/${transaction.previousTransactionId}`}>
                {transaction.previousTransactionId}
              </ClientSideLink>
            </StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>첨부파일 버전</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.version}</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>첨부파일 이전 버전</StyledPaddingRightTd>
            <StyledPaddingLeftTd>{transaction.previousVersion}</StyledPaddingLeftTd>
          </tr>
        </tbody>
      </StyledTable>
    </VerticalScroll60>
  )
}

export default Transaction
