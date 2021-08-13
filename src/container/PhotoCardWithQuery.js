import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { PhotoCard } from '../components/PhotoCard'

const query = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  })
  if (loading) return <p>Loading....</p>
  if (error) return <p>Error :(</p>

  return (
    <PhotoCard id={id} {...data.photo} />
  )
}
