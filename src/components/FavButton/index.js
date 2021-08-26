import React from 'react'
import PropTypes from 'prop-types'
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

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
