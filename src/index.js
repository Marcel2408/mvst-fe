/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App/App';

const token = process.env.REACT_APP_GITHUB_API_TOKEN;
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: token ? `Bearer ${token}` : null,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
