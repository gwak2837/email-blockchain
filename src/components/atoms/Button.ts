import { Button } from 'antd'
import {
  BASIC_TEXT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_TEXT_COLOR,
} from 'src/models/constants'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.8rem;
  height: auto;

  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
`

export const PrimaryButton = styled(StyledButton)`
  background: ${PRIMARY_BACKGROUND_COLOR};
  border: 1px solid ${PRIMARY_BACKGROUND_COLOR};
  color: #eee;

  :active,
  :hover {
    background: #313545;
    border-color: #313545;
    color: #eee;
  }

  :focus {
    background: ${PRIMARY_BACKGROUND_COLOR};
    border-color: ${PRIMARY_BACKGROUND_COLOR};
    color: #eee;
  }
`
