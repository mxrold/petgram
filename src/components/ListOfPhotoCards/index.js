import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
import { TextLoading } from './styles'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

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
