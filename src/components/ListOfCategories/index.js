import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      const api = 'https://petgram-server-mxrold-mxrold.vercel.app/categories'
      window.fetch(api)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }
    fetchData()
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
