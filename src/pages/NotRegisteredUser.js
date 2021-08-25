import React, { useState, useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(false)
  const { activateAuth } = useContext(Context)
  const { registerMutation } = RegisterMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(activateAuth)
  }

  return (
    <UserForm
      onSubmit={onSubmit}
      activateAuth={activateAuth}
      register={register}
      setRegister={setRegister}
    />
  )
}
