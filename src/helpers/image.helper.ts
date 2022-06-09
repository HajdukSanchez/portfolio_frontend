/**
 * Helper to handle the image URL in the GraphQL response.
 *
 * @param {string} imageURL The image URL in the GraphQL response.
 * @return {string} The Image iRL with the domain.
 */
const getImageURL = (imageURL: string): string => {
  return `${process.env.REACT_APP_BASE_STRAPI_URL}${imageURL ?? ''}`;
};

export { getImageURL };
