import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { UserLogged } from './UserLogged'
import { Context } from '../context/Context'

export const Route = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged isAuth={isAuth} />
    </>
  )
}
