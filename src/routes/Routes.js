import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { UserLogged } from './UserLogged'

const isAuth = false

export const Route = () => {
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
