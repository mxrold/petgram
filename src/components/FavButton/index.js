import React, { useContext } from 'react'
import { useNavigate } from '@reach/router'
import PropTypes from 'prop-types'
import { Context } from '../../context/Context'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button, Likes } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const { isAuth } = useContext(Context)
  const navigate = useNavigate()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <>
      <Button onClick={isAuth ? onClick : () => navigate('/login')} liked={liked}>
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
