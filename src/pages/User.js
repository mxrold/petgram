import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { ButtonLogout } from '../components/ButtonLogout'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <ButtonLogout onClick={removeAuth} />
  )
}
