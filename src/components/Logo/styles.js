import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: max-content;
  margin-bottom: 30px;
  border-bottom: 1px solid ${Colors.lightGray};
`

export const Svg = styled.svg`
  width: 160px;
  margin: -20px auto 0 auto;
`
