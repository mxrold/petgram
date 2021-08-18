import React, { useState } from 'react'

export const Context = React.createContext(null)

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
