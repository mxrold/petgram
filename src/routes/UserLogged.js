import React from 'react'
import { Router } from '@reach/router'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'

export const UserLogged = ({ isAuth }) => {
  return (
    <Router>
      {
        isAuth
        ? <>
          <Favs path='/favs' />
          <User path='/user' />
          </>
        : <>
          <NotRegisteredUser path='/favs' />
          <NotRegisteredUser path='/user' />
        </>
      }
    </Router>
  )
}

