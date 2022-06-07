/**
 * Data model for a project card
 *
 * @export interface
 * @interface Certificate
 */
export interface Certificate {
  uid: string;
  name: string;
  comment: string;
  image: string;
}

/**
 * Data model for variables used in the GET_TOP_CERTIFICATES query
 *
 * @export interface
 * @interface TopCertificatesVariables
 */
export interface TopCertificatesVariables {
  /**
   * The number of data to return
   *
   * @type {number}
   * @memberof TopCertificatesVariables
   */
  limit: number;
  /**
   * Whether or not to return only outstanding data
   *
   * @type {boolean}
   * @memberof TopCertificatesVariables
   */
  outstanding: boolean;
}
