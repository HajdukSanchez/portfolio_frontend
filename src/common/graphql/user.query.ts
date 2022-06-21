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
          picture
          cv
        }
      }
    }
  }
`;

export { GET_USER };
