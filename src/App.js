/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react'
import { Router } from '@reach/router'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </>
  )
}
