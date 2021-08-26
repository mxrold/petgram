import React from 'react'
import { Helmet as Layout } from 'react-helmet'

export const Helmet = ({ title = '', description = '' }) => {
  return (
    <Layout>
      <title>{`${title} | Petgram`}</title>
      <meta name='description' content={description} />
    </Layout>
  )
}
