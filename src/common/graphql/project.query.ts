import { gql } from '@apollo/client';

/**
 * Query to get the top projects filter why outstanding values
 */
const GET_TOP_PROJECTS = gql`
  query GetTopProjects($limit: Int, $outstanding: Boolean) {
    projects(pagination: { limit: $limit }, filters: { outstanding: { eq: $outstanding } }) {
      data {
        id
        attributes {
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

/**
 * Query to get all the projects
 */
const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects(sort: "date:desc") {
      data {
        id
        attributes {
          date
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

/**
 * Query to get a specific project by id
 */
const GET_PROJECT_BY_ID = gql`
  query GetProjectByID($id: ID!) {
    project(id: $id) {
      data {
        attributes {
          name
          description
          githubUrl
          projectPageUrl
          outstanding
          date
          technologies {
            data {
              attributes {
                name
                primaryColor
                secondaryColor
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

export { GET_TOP_PROJECTS, GET_ALL_PROJECTS, GET_PROJECT_BY_ID };
