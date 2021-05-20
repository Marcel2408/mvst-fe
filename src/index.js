/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import App from './App/App';

const token = process.env.GITHUB_API_TOKEN;
const githubApiLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: token ? `Bearer ${token}` : null,
  },
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: githubApiLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
