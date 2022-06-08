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

const PROJECTS_PAGE = gql`
  query GetProjectsPageInformation {
    projectsPage {
      data {
        attributes {
          header
        }
      }
    }
  }
`;

export { HOME_PAGE, PROJECTS_PAGE };
