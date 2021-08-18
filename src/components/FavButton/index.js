import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button, Likes } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <>
      <Button onClick={onClick} liked={liked}>
        <Icon size='28px' />
      </Button>
      <Likes>{likes} likes</Likes>
    </>
  )
}
