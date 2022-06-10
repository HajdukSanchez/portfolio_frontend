import { gql } from '@apollo/client';

/**
 * Query to get the user information by id
 */
const GET_USER = gql`
  query GetUserByID($uid: ID!) {
    profile(id: $uid) {
      data {
        attributes {
          name
          lastName
          linkedIn
          gitHub
          twitter
          email
          cellphone
          profession
          username
          about
          picture {
            data {
              attributes {
                url
              }
            }
          }
          cv {
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

export { GET_USER };
