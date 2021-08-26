import React from 'react'
import { Helmet } from '../utils/Helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <Helmet title='Your pet App' description='With Petgram you can find images of very beautiful pets!' />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
