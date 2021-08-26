import React, { useContext } from 'react'
import { Redirect, Router } from '@reach/router'
import { Context } from '../context/Context'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NotFound } from '../pages/NotFound'

export const Route = () => {
  const { isAuth } = useContext(Context)

  return (
    <Router>
      <NotFound default />
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:detailId' />
      {!isAuth && <NotRegisteredUser path='/login' />}
      {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
      {!isAuth && <Redirect noThrow from='/user' to='/login' />}
      {isAuth && <Redirect from='/login' to='/' />}
      <Favs path='/favs' />
      <User path='/user' />
    </Router>
  )
}
