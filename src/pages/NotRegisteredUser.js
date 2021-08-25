import React, { useState, useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const [register, setRegister] = useState(true)
  const { activateAuth } = useContext(Context)
  const { mutation, loading, error } = register ? RegisterMutation() : LoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    mutation({ variables: variable })
      .then(response => {
        const { data } = response
        activateAuth(register ? data.signup : data.login)
      })
  }

  return (
    <UserForm
      onSubmit={onSubmit}
      register={register}
      setRegister={setRegister}
      error={error}
      disabled={loading}
    />
  )
}
