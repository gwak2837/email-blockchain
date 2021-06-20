import { PaddingLeftTd, PaddingRightTd, Table, VerticalScroll } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { useRouter } from 'next/router'

const VerticalScroll50 = styled(VerticalScroll)`
  height: 50%;
`

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
  min-width: 200px;
`

const StyledPaddingLeftTd = styled(PaddingLeftTd)`
  border-bottom: 2px solid #f0f0f0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 650px;
`

const description = '582cb96ae5335e18cbec8c0a0045740f43c681e0129c207b07ee31498553eda5'

function BlockPage() {
  const { query } = useRouter()

  return (
    <PageHead title="이메일 블록체인 - 블록 상세" description={description}>
      <NavigationLayout>
        <h2>블록 상세</h2>
        <VerticalScroll50>
          <StyledTable>
            <thead>
              <tr>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <StyledPaddingRightTd>Block Number</StyledPaddingRightTd>
                <StyledPaddingLeftTd>{query.id}</StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>Previous Block Hash</StyledPaddingRightTd>
                <StyledPaddingLeftTd>
                  0000000000000000000000000000000000000000000000000000000000000000
                </StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>Merkle Root</StyledPaddingRightTd>
                <StyledPaddingLeftTd>
                  cbf094b0b770addd8b79fc6ab3a003379a5fdd4bf43225a2c2f784f33855ca08
                </StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>Timestamp</StyledPaddingRightTd>
                <StyledPaddingLeftTd>{new Date().toISOString()}</StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>FTP Title</StyledPaddingRightTd>
                <StyledPaddingLeftTd>ACC FAN MOTOR CABLE ENTRY</StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>Sender ID</StyledPaddingRightTd>
                <StyledPaddingLeftTd>OO건설 John Doe</StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>Receiver ID</StyledPaddingRightTd>
                <StyledPaddingLeftTd>OOeng-홍길동</StyledPaddingLeftTd>
              </tr>
            </tbody>
          </StyledTable>
        </VerticalScroll50>

        <h2>트랜잭션 상세</h2>
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
                <StyledPaddingLeftTd>16</StyledPaddingLeftTd>
              </tr>
              <tr>
                <StyledPaddingRightTd>이전 트랜잭션 ID</StyledPaddingRightTd>
                <StyledPaddingLeftTd>
                  <ClientSideLink href={`/blocks/${15}`}>15</ClientSideLink>
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
      </NavigationLayout>
    </PageHead>
  )
}

export default BlockPage
