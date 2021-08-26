import React from 'react'
import PropTypes from 'prop-types'
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
