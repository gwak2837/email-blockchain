import { useRouter } from 'next/router'
import { PaddingLeftTd, PaddingRightTd, Table, VerticalScroll } from 'src/components/atoms/Table'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import Transaction from 'src/components/Transaction'
import { genesisTransaction, transaction } from 'src/models/dummy-data'
import styled from 'styled-components'

const VerticalScroll50 = styled(VerticalScroll)`
  height: 50%;
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

const H2 = styled.h2`
  padding: 0.5rem 1rem 0;
`

const description = '582cb96ae5335e18cbec8c0a0045740f43c681e0129c207b07ee31498553eda5'

function BlockPage() {
  const { query } = useRouter()

  return (
    <PageHead title="이메일 블록체인 - 블록 상세" description={description}>
      <NavigationLayout>
        <H2>블록 상세</H2>
        <VerticalScroll50>
          <StyledTable>
            <thead />
            <tbody>
              {query.id === '1' ? (
                <>
                  <tr>
                    <StyledPaddingRightTd>Block Number</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>1</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Block Hash</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>
                      5c13f35becadd7ec244d61f32907b255bb32d6f8a9c557d78ec7e1c713b4f543
                    </StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Previous Block Hash</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>
                      0000000000000000000000000000000000000000000000000000000000000000
                    </StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Timestamp</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>2021.10.20. 16:50</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Sender ID</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>greedycatty@gmail.com</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Receiver ID</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>-</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Subject</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>-</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Content</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>-</StyledPaddingLeftTd>
                  </tr>
                </>
              ) : (
                <>
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
                    <StyledPaddingRightTd>Sender ID</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>OO건설 John Doe</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Receiver ID</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>OOeng-홍길동</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Subject</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>ACC FAN MOTOR CABLE ENTRY</StyledPaddingLeftTd>
                  </tr>
                  <tr>
                    <StyledPaddingRightTd>Content</StyledPaddingRightTd>
                    <StyledPaddingLeftTd>.</StyledPaddingLeftTd>
                  </tr>
                </>
              )}
            </tbody>
          </StyledTable>
        </VerticalScroll50>

        <H2>트랜잭션 상세</H2>
        <Transaction transaction={query.id === '1' ? genesisTransaction : transaction} />
      </NavigationLayout>
    </PageHead>
  )
}

export default BlockPage
