import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <UserForm onSubmit={activateAuth} />
  )
}
