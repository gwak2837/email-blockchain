import styled from 'styled-components'

const Line = styled.div`
  border: 1px solid black;
`

const FlexContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  line-height: 1.5rem;
`

function Footer() {
  return (
    <footer>
      <Line />
      <FlexContainerCenter>
        <div>
          중앙대학교 건설경영정보연구실
          <br />
          Tel: 02-821-6844
          <br />
          Homepage:{' '}
          <a href="https://cmit.cau.ac.kr" target="_blank" rel="noreferrer">
            cmit.cau.ac.kr
          </a>
          <br />
          Address:{' '}
          <a
            href="https://map.naver.com/v5/entry/place/75648753?c=14132901.1032509,4509634.8918749,17,0,0,0,dh"
            target="_blank"
            rel="noreferrer"
          >
            서울특별시 동작구 흑석로 84 207관
          </a>{' '}
          713호
        </div>
      </FlexContainerCenter>
    </footer>
  )
}

export default Footer
