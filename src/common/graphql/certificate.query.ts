import { gql } from '@apollo/client';

const GET_TOP_CERTIFICATES = gql`
  query TopCertificates($limit: Int, $outstanding: Boolean) {
    certificates(pagination: { limit: $limit }, filters: { outstanding: { eq: $outstanding } }) {
      data {
        attributes {
					uid
          name
          comment
          image {
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

export { GET_TOP_CERTIFICATES };
