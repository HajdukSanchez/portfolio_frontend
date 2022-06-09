import { gql } from '@apollo/client';

/**
 * Query to get information of the home page
 */
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

/**
 * Query to get information of the projects page
 */
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

/**
 * Query to get information of the certificates page
 */
const CERTIFICATES_PAGE = gql`
  query GetCertificatesPageInformation {
    certificatesPage {
      data {
        attributes {
          header
        }
      }
    }
  }
`;

export { HOME_PAGE, PROJECTS_PAGE, CERTIFICATES_PAGE };
