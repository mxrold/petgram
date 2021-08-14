import React from 'react'
import { Route } from './routes/Routes'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Route />
      <NavBar />
    </>
  )
}
