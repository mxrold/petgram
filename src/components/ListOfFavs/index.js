import React from 'react'
import { Favs } from '../../components/Favs'
import { Grid } from './styles'

export const ListOfFavs = ({ favs }) => {
  return (
    <Grid>
      {
        favs.map(item => (
          <Favs key={item.id} src={item.src} id={item.id} />
        ))
      }
    </Grid>
  )
}
