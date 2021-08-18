import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from './context/Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-mxrold-g0y4n7aai-mxrold.vercel.app/graphql'
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('App')
)
