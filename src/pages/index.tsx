import styled from 'styled-components'
import PageLayout from '../components/layouts/PageLayout'
import PageHead from '../components/layouts/PageHead'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import useBoolean from 'src/hooks/useBoolean'
import { useState, useContext, CSSProperties } from 'react'
import { FlexContainerBetween, FlexContainerAlignCenter } from 'src/styles/FlexContainer'
import { HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/models/constants'
import { sleep } from 'src/utils/commons'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { Tabs, Carousel, Divider, Tag, Checkbox } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const contentStyle: CSSProperties = {
  height: '150px',
  color: '#929393',
  lineHeight: '150px',
  background: '#EAEAEA',
  textAlign: 'center',
}

const FlexContainerBetweenCenter = styled(FlexContainerBetween)`
  align-items: center;
  height: 100%;
`

const LocationText = styled.h3`
  margin: 16px 2px 16px 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

const IconGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 16px 16px 16px;
  top: 0;
  align-items: center;
  height: 100%;
`
const PreferenceText = styled.div`
  text-align: center;
  margin: 0.5rem;
  border-radius: 1rem;
`
const BrownText = styled.div`
  color: #5c4d42;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.05rem;
`

export const GridContainerUl = styled.ul<{ onlyImage: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.onlyImage ? '1fr 1fr 1fr' : '1fr')};
  gap: ${(p) => (p.onlyImage ? 'min(1vw, 0.5rem)' : 'min(2vw, 1rem)')};
  padding: ${(p) => (p.onlyImage ? 'min(1vw, 0.5rem)' : 'min(2vw, 1rem)')};

  background: #fcfcfc;
`

const FlexContainerOverflowScroll = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll hidden;
  margin: 0 1rem 0 0;
`

const StyledTag = styled.span<{ color: string }>`
  margin: 10px;
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 12px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  background-color: ${(p) => p.color};
`

const FixedPosition = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${HEADER_HEIGHT};
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  text-align: right;
`

const menus = []
const isMenusLoading = false

function HomePage() {
  const [hasMoreMenus, setHasMoreMenus] = useState(true)
  const [onlyImage, toggleOnlyImage] = useBoolean(false)
  const [doesFranchiseIncluded, toggleWhetherIncludeFranchise] = useBoolean(false)

  async function fetchMoreMenus() {
    if (menus?.length) {
      await sleep(5000) // fetchMore({ variables: { from, count } })
      setHasMoreMenus(false)
    } else {
      setHasMoreMenus(false)
    }
  }

  const [sentryRef] = useInfiniteScroll({
    loading: isMenusLoading,
    hasNextPage: hasMoreMenus,
    onLoadMore: fetchMoreMenus,
  })

  return (
    <PageHead>
      <PageLayout>홈페이지</PageLayout>
    </PageHead>
  )
}

export default HomePage
