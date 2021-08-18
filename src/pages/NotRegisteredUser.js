import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <form onSubmit={activateAuth}>
      <button>Iniciar sesión</button>
    </form>
  )
}
