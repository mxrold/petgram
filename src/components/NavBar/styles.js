import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

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
  background-color: #eee;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;
  padding: 4px;
  color: #888;
  text-decoration: none;
  border-radius: 9px;
  &[aria-current] {
    color: black;
    &::after {
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 3.4rem;
      line-height: 2rem;
      ${fadeIn({ time: '0.5s' })};
    }
  }
`
