// apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create the Apollo client instance
const apolloClient = new ApolloClient({
  uri: 'https://admin.wanda.gallery/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default apolloClient;
