import React from 'react'
import { Helmet } from '../utils/Helmet'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <h2>...Loading </h2>
  if (error) return <h2>...Error </h2>

  return (
    <>
      <Helmet title='Your favorites' description='Discover all of your favorites images' />
      <ListOfFavs favs={data.favs} />
    </>
  )
}
