import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  position: relative;
  min-height: 200px;
  margin-bottom: 26px;
`

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
