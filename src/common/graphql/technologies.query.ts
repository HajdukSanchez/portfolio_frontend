import { gql } from '@apollo/client';

const TECHNOLOGIES = gql`
  query {
    technologies {
      data {
        attributes {
          name
          primaryColor
          secondaryColor
          picture {
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

export { TECHNOLOGIES };
