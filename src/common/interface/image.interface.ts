/**
 * Data model for all the data related to an image in Strapi GraphQL.
 *
 * @export Interface
 * @interface Image
 */
export interface Image {
  /**
   * Data with the attributes an in this attribute we get the image url.
   *
   * @type {{
   *     attributes: {
   *       url: string;
   *     };
   *   }}
   * @memberof Image
   */
  data: {
    attributes: {
      url: string;
    };
  };
}
