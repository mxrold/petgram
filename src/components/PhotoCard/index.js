import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, Figure, Image, Button, Likes } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [showImage, element] = useNearScreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        showImage &&
          <>
            <a href={`/detail/${id}`}>
              <Figure>
                <Image src={src} />
              </Figure>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='28px' />
            </Button>
            <Likes>{likes} likes</Likes>
          </>
      }
    </Article>
  )
}
