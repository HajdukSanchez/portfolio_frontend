import { gql } from '@apollo/client';

/**
 * Query to get the top certificates filter why outstanding values
 */
const GET_TOP_CERTIFICATES = gql`
  query GetTopCertificates($limit: Int, $outstanding: Boolean) {
    certificates(pagination: { limit: $limit }, filters: { outstanding: { eq: $outstanding } }) {
      data {
        id
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          badgePicture {
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
 * Query to get all the certificates
 */
const GET_ALL_CERTIFICATES = gql`
  query GetAllCertificates {
    certificates(sort: "date:desc") {
      data {
        id
        attributes {
          name
          date
          image {
            data {
              attributes {
                url
              }
            }
          }
          badgePicture {
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
 * Query to get a specific certificate by id
 */
const GET_CERTIFICATE_BY_ID = gql`
  query GetCertificateByID($id: ID!) {
    certificate(id: $id) {
      data {
        attributes {
          name
          date
          courseLink
          comment
          outstanding
          image {
            data {
              attributes {
                url
              }
            }
          }
          badgePicture {
            data {
              attributes {
                url
              }
            }
          }
          company {
            data {
              attributes {
                name
                link
                icon {
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
      }
    }
  }
`;

export { GET_TOP_CERTIFICATES, GET_ALL_CERTIFICATES, GET_CERTIFICATE_BY_ID };
