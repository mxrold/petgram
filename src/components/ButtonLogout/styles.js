import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Div = styled.div`
  width: 60%;
  height: 36px;
  margin: 0 auto;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: ${Colors.alertBg};
  color: ${Colors.alertText};
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 17px;
  outline: none;
`
