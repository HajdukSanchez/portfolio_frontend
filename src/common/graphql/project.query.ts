import { gql } from '@apollo/client';

const GET_TOP_PROJECTS = gql`
  query GetTopProjects($limit: Int, $outstanding: Boolean) {
    projects(pagination: { limit: $limit }, filters: { outstanding: { eq: $outstanding } }) {
      data {
        attributes {
          uid
          name
          shortDescription
          cover {
            data {
              attributes {
                url
              }
            }
          }
          tags {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_TOP_PROJECTS };
