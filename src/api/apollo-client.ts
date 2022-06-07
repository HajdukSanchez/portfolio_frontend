import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BASE_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
});

export { client };
