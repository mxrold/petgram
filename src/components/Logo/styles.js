import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-bottom: 30px;
  border-bottom: 1px solid ${Colors.lightGray};
`

export const Svg = styled.svg`
  width: 220px;
  margin: -30px auto 0 auto;
`
