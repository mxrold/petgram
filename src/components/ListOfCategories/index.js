import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const api = 'https://petgram-server-mxrold-mxrold.vercel.app/categories'
      window.fetch(api)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
        })
    }
    
    fetchData()
  }, [])

  return (
    <List>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>
  )
}
