import styled from 'styled-components'

export const PaddingCenterTh = styled.th`
  text-align: center;
  padding: 0.5rem;
`

export const PaddingCenterTd = styled.td`
  text-align: center;
  padding: 0.5rem;
`

export const PaddingRightTd = styled.td`
  text-align: right;
  padding: 0.5rem;
`

export const PaddingLeftTd = styled.td`
  text-align: left;
  padding: 0.5rem;
`

export const VerticalScroll = styled.div`
  height: 100%;
  overflow: auto;
  position: relative;
`

export const Table = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  th,
  td {
    white-space: nowrap;
  }
`
