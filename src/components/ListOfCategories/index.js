import React, { useState, useEffect } from 'react'
import { useCategoriesData } from '../../hooks/useCategoriesData'
import { Category } from '../Category'
import { Loader } from '../Loader'
import { List, Item } from './styles'

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
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        )
      }
    </List>
  )

  return (
    <>
      {
        loading
          ? <Loader items={8} />
          : <>
            {renderList()}
            {showFixed && renderList(true)}
          </>
      }
    </>
  )
}
