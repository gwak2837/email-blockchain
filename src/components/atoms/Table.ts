import styled from 'styled-components'

export const PaddingRightTd = styled.td`
  text-align: right;
`

export const PaddingLeftTd = styled.td`
  text-align: left;
`

export const VerticalScroll = styled.div`
  height: 100%;
  margin: 1rem;
  overflow: auto;
  position: relative;
`

export const Table = styled.table`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  th,
  td {
    padding: 0.5rem;
    text-align: center;
    white-space: nowrap;
    border: 2px solid #eee;
  }
`
