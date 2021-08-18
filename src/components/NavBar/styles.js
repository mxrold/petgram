import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'
import { Colors } from '../../styles/Colors'

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right:0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: max-content;
  margin: 0 auto;
  padding: 8px 0;
  z-index: 2;
  background-color: ${Colors.lightGray};
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;
  padding: 4px;
  color: ${Colors.mediumGray};
  text-decoration: none;
  border-radius: 9px;
  &[aria-current] {
    color: ${Colors.darkGray};
    &::after {
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 3.4rem;
      line-height: 2rem;
      color: ${Colors.darkGray};
      ${fadeIn({ time: '0.5s' })};
    }
  }
`
