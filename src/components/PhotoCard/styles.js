import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Figure = styled.figure`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 56.25% 0 0 0;
  border-radius: 10px;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  ${fadeIn()};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
