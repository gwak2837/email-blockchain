import { ReactNode, memo } from 'react'
import styled from 'styled-components'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerAlignCenter } from 'src/styles/FlexContainer'

const FixedHeader = styled.header`
  width: fit-content;
  height: 100vh;
  display: inline-block;

  box-shadow: 0 -2px 5px 0 rgba(142, 142, 142, 0.25);
  background-color: #3c505f;

  h5 {
    color: #eee;
  }
`

const FlexContainerAroundNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  padding: 1rem;

  > a {
    flex-grow: 1;
    height: 100%;
  }
`

const FlexContainerColumnCenterCenter = styled(FlexContainerAlignCenter)`
  flex-flow: column nowrap;
  justify-content: center;

  height: 100%;
`

const NoMarginH6 = styled.h5`
  margin: 0;
`

function Header() {
  return (
    <FixedHeader>
      <FlexContainerAroundNav>
        <ClientSideLink href="/documents/sending">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>FTP 문서 발신</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>문서 수발신 목록</NoMarginH6>
            <NoMarginH6>(문서관리대장)</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/history">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>문서 변경이력 조회</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/relating">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>연관문서 조회</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/prove">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>진위검증</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
      </FlexContainerAroundNav>
    </FixedHeader>
  )
}

const MemoizedHeader = memo(Header)

type Props = {
  children: ReactNode
}

function NavigationLayout({ children }: Props) {
  return (
    <>
      <MemoizedHeader />
      {children}
    </>
  )
}

export default NavigationLayout
