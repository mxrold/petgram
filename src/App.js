/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
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
        : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
      }
    </>
  )
}
