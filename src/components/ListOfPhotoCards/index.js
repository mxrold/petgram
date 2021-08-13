import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { TextLoading } from './styles'

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(getPhotos)

  if (error) return window.alert("The photos can't be loaded")

  return (
    <>
      {
        loading
        ? <TextLoading>...Loading photos 🐶</TextLoading>
        : <ul>
            {
              data.photos.map(item => (
                <PhotoCard key={item.id} {...item} />
              ))
            }
          </ul>
      }
    </>
  )
}
