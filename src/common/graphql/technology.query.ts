import { gql } from '@apollo/client';

/**
 * Query to get the top technologies filter why outstanding values
 */
const GET_TOP_TECHNOLOGIES = gql`
  query GetTopTechnologies($limit: Int, $outstanding: Boolean) {
    technologies(pagination: { limit: $limit }, filters: { outstanding: { eq: $outstanding } }) {
      data {
        id
        attributes {
          name
          primaryColor
          secondaryColor
          picture
        }
      }
    }
  }
`;

export { GET_TOP_TECHNOLOGIES };
