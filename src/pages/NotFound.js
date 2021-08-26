import React from 'react'
import { Helmet } from '../utils/Helmet'

export const NotFound = () => (
  <>
    <Helmet title='Not found' description={"Opps! We couldn't find this page."} />
    <div>
      <h1>Page not found</h1>
      <img src='https://i.ibb.co/hDf5jv3/this-is-fine-404.gif' />
    </div>
  </>
)
