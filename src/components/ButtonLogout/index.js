import React from 'react'
import { Div, Button } from './styles'

export const ButtonLogout = ({ onClick }) => (
  <Div>
    <Button onClick={onClick}>Log out</Button>
  </Div>
)