import React from 'react'
import { Link } from '@reach/router'
import { Article, Image } from './styles'

export const Favs = ({ src, id }) => {
  return (
    <Article>
      <Link to={`/detail/${id}`}>
        <Image src={src} />
      </Link>
    </Article>
  )
}
