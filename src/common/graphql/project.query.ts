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

const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects(sort: "date:desc") {
      data {
        attributes {
          date
          uid
          name
          shortDescription
          githubUrl
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_TOP_PROJECTS, GET_ALL_PROJECTS };
