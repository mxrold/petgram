import styled, { css } from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Button = styled.button`
  position: absolute;
  bottom: 26px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${Colors.bgApp};
  color: ${Colors.mediumGray};
  border: none;
  border: 2px solid ${Colors.mediumGray};
  border-radius: 50%;
  cursor: pointer;
  ${props => props.liked && css`
    color: ${Colors.primaryOne};
    border: 2px solid ${Colors.primaryOne};
  `}
`
export const Likes = styled.span`
  display: block;
  margin-top: 24px;
  padding-left: 16px;
  font-size: 1rem;
  font-weight: 500;
  color: ${Colors.darkGray};
`
