import React, { useState, useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(true)
  const { activateAuth } = useContext(Context)
  const { registerMutation, loading, error } = RegisterMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(activateAuth)
  }

  const errorMsg = error && 'User already exists. Try another email'

  return (
    <UserForm
      onSubmit={onSubmit}
      activateAuth={activateAuth}
      register={register}
      setRegister={setRegister}
      errorMsg={errorMsg}
      disabled={loading}
    />
  )
}
