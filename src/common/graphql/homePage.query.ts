import { gql } from '@apollo/client';

const HOME_PAGE = gql`
  query GetHomePageInformation {
    homePage {
      data {
        attributes {
          home
          technologies
          projects
          certificates
        }
      }
    }
  }
`;

export { HOME_PAGE };
