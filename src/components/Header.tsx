import { memo } from 'react'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import styled from 'styled-components'

const FixedHeader = styled.header`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${HEADER_HEIGHT};
  box-shadow: 0 -2px 5px 0 rgba(142, 142, 142, 0.25);
  background-color: #ffffff;
`

const FlexContainerAroundNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;

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

const username = 'username'

function Header() {
  return (
    <FixedHeader>
      <FlexContainerAroundNav>
        <ClientSideLink href="/">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>홈</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href="/feed">
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>소식</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={`/users/${username}/favorite-menus`}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>찜</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={`/users/${username}/orders`}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>주문내역</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
        <ClientSideLink href={`/users/${username}`}>
          <FlexContainerColumnCenterCenter>
            <NoMarginH6>MY</NoMarginH6>
          </FlexContainerColumnCenterCenter>
        </ClientSideLink>
      </FlexContainerAroundNav>
    </FixedHeader>
  )
}

export default memo(Header)
