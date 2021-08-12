import React, { useState, useEffect } from 'react'
import { List, Item, Circle, Svg } from './styles'

export const Loader = ({ items, size = 37.5 }) => {
  const [count, setCount] = useState([])

  useEffect(() => {
    counterItems()
  }, [])

  const counterItems = () => {
    const data = []
    for (let i = 0; i < items; i++) {
      data.push(i)
    }

    setCount(data)
  }

  return (
    <List>
      {
        count.map(item => (
          <Item key={item}>
            <Svg
              width={size}
              height={size}
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <Circle cx='50' cy='50' r={45} />
            </Svg>
          </Item>
        ))
      }
    </List>
  )
}