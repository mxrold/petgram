import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { Colors } from '../../styles/Colors'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    width: 75px;
    text-align: center;
    text-decoration: none;
`

export const Image = styled.img`
position: relative;
    height: 75px;
    width: 75px;
    overflow: hidden;
    object-fit: cover;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border: 2px solid ${Colors.lightGray};
    border-radius: 50%;
`
