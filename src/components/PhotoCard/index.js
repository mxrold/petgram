import React, { useState, useEffect, useRef } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Article, Figure, Image, Button, Likes } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [showImage, setShowImage] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (e) {
      return false
    }
  })
  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(
    typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShowImage(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

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
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='28px' />
            </Button>
            <Likes>{likes} likes</Likes>
          </>
      }
    </Article>
  )
}
