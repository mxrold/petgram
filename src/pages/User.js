import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { Helmet } from '../utils/Helmet'
import { ButtonLogout } from '../components/ButtonLogout'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <Helmet title='User' />
      <ButtonLogout onClick={removeAuth} />
    </>
  )
}
