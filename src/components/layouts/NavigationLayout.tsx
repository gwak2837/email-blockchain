import { DownOutlined } from '@ant-design/icons'
import { ReactNode, memo } from 'react'
import styled from 'styled-components'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NAVIGATION_WIDTH = '11rem'

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: ${NAVIGATION_WIDTH};
  height: 100vh;
  display: inline-block;

  box-shadow: 0 -2px 5px 0 rgba(142, 142, 142, 0.25);
  background-color: #324557;
`

const NavigationPadding = styled.div`
  padding-left: ${NAVIGATION_WIDTH};
  height: 100vh;
`

const FlexContainerAroundNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  height: 100%;

  > a {
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`

const HorizontalBorder = styled.div`
  width: 100%;
  border: 1px solid #eee;
`

const FlexContainerColumnCenterCenter = styled(FlexContainerAlignCenter)<{ selected: boolean }>`
  flex-flow: column nowrap;
  justify-content: center;

  height: 100%;
  padding: 1rem;
  ${(p) => (p.selected ? 'background: #313545' : '')}
`

const PaddingCenterH4 = styled.h4`
  text-align: center;
  padding: 0 0.5rem;
  color: #eee;
`

function Navigation() {
  const { asPath } = useRouter()

  return (
    <FixedPosition>
      <FlexContainerAroundNav>
        <ClientSideLink href="/">
          <FlexContainerColumnCenterCenter selected={asPath === '/'}>
            <PaddingCenterH4>블록체인 기반</PaddingCenterH4>
            <PaddingCenterH4>이메일 문서 관리 시스템</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <HorizontalBorder />
        <ClientSideLink href="/documents/sending">
          <FlexContainerColumnCenterCenter selected={asPath === '/documents/sending'}>
            <PaddingCenterH4>FTP 문서 발신</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents">
          <FlexContainerColumnCenterCenter selected={asPath === '/documents'}>
            <PaddingCenterH4>문서 수발신 목록</PaddingCenterH4>
            <PaddingCenterH4>(문서관리대장)</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/history">
          <FlexContainerColumnCenterCenter selected={asPath === '/documents/history'}>
            <PaddingCenterH4>문서 변경이력 조회</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/relating">
          <FlexContainerColumnCenterCenter selected={asPath === '/documents/relating'}>
            <PaddingCenterH4>연관문서 조회</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/documents/verification">
          <FlexContainerColumnCenterCenter selected={asPath === '/documents/verification'}>
            <PaddingCenterH4>진위검증</PaddingCenterH4>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
      </FlexContainerAroundNav>
    </FixedPosition>
  )
}

const MemoizedNavigation = memo(Navigation)

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const GridContainerRow = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`

const StyledHeader = styled.header`
  width: 100%;
  background: #2377ba;
  color: #eee;
`

const RightAlign = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  gap: 1rem;
  text-align: right;
  padding: 1rem;
`

type Props = {
  children: ReactNode
}

function NavigationLayout({ children }: Props) {
  return (
    <GridContainer>
      <MemoizedNavigation />
      <NavigationPadding />
      <GridContainerRow>
        <StyledHeader>
          <RightAlign>
            <div>
              홍길동
              <DownOutlined />
            </div>
            <Image src="/user-image.svg" alt="/user-image.svg" width="32" height="32" />
          </RightAlign>
        </StyledHeader>
        <main>{children}</main>
      </GridContainerRow>
    </GridContainer>
  )
}

export default NavigationLayout
