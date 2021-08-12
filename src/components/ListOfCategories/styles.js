import styled from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin-bottom: 30px;
  &.fixed {
    position: fixed;
    top: -15px;
    left: 0;
    right: 0;
    max-width: 400px;
    margin: 0 auto;
    padding: 5px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    transform: scale(.6);
    z-index: 1;
    ${bounceDown()};
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
