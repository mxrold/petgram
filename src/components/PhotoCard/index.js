import React from 'react'
import { Link } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { FavButton } from '../FavButton'
import { Article, Figure, Image } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showImage, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        showImage &&
          <>
            <Link to={`/detail/${id}`}>
              <Figure>
                <Image src={src} />
              </Figure>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }
                  return (
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
