import styled from 'styled-components'
import ClientSideLink from './atoms/ClientSideLink'
import { VerticalScroll, PaddingRightTd, PaddingLeftTd, Table } from './atoms/Table'

const VerticalScroll60 = styled(VerticalScroll)`
  height: 60%;
`

const StyledTable = styled(Table)`
  padding: 1rem;

  tbody > tr:nth-child(1) > td {
    border-top: 2px solid #094e97;
  }
`

const StyledPaddingRightTd = styled(PaddingRightTd)`
  background: #f0f0f0;
  border-width: 0 2px 2px 0;
  border-style: solid;
  border-color: #dcdde6;
  min-width: 200px;
`

const StyledPaddingLeftTd = styled(PaddingLeftTd)`
  border-bottom: 2px solid #f0f0f0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 650px;
`

type Props = {
  transaction: any
}

function Transaction({ transaction }: Props) {
  return (
    <VerticalScroll60>
      <StyledTable>
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledPaddingRightTd>첨부파일 설명</StyledPaddingRightTd>
            <StyledPaddingLeftTd>
              FAN MOTOR의 GLAND PLATE에 CABLE 인입용 HOLE이 없어 HOLE 이 없어 HOLE 가공을 요청
            </StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>첨부파일 원문</StyledPaddingRightTd>
            <StyledPaddingLeftTd>
              afc9edc666c3dbc49cd26b4cefcb2b874b163357eb36ff85cff7455fe068cef2
            </StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>문서분류코드</StyledPaddingRightTd>
            <StyledPaddingLeftTd>GN-CV02</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>연관 키워드</StyledPaddingRightTd>
            <StyledPaddingLeftTd>가공, 인입용 HOLE, FAN MOTOR</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>트랜잭션 ID</StyledPaddingRightTd>
            <StyledPaddingLeftTd>1</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>이전 트랜잭션 ID</StyledPaddingRightTd>
            <StyledPaddingLeftTd>
              <ClientSideLink href={`/transactions/${15}`}>15</ClientSideLink>
            </StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>첨부파일 버전</StyledPaddingRightTd>
            <StyledPaddingLeftTd>CCSRev.1.0</StyledPaddingLeftTd>
          </tr>
          <tr>
            <StyledPaddingRightTd>이전 첨부파일 버전</StyledPaddingRightTd>
            <StyledPaddingLeftTd>CCSRev.0.2</StyledPaddingLeftTd>
          </tr>
        </tbody>
      </StyledTable>
    </VerticalScroll60>
  )
}

export default Transaction
