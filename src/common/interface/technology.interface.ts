import { TopCertificatesVariables } from './certificate.interface';

/**
 * Data model for Technology
 *
 * @export interface
 * @interface Technology
 */
export interface Technology {
  /**
   * Unique ID of the technology
   *
   * @type {string}
   * @memberof Technology
   */
  uid: string;
  /**
   * Name of the technology
   *
   * @type {string}
   * @memberof Technology
   */
  name: string;
  /**
   * Primary color of the technology
   * Used for the background color of the technology card
   *
   * @type {string}
   * @memberof Technology
   */
  primaryColor: string;
  /**
   * Secondary color of the technology
   * Used for the text color of the technology card
   *
   * @type {string}
   * @memberof Technology
   */
  secondaryColor: string;
  /**
   * Picture URL of the technology
   * Used for the image of the technology card
   *
   * @type {string}
   * @memberof Technology
   */
  image: string;
}

/**
 * Data model for variables used in the GET_TOP_TECHNOLOGIES query
 *
 * @export interface
 * @interface TopTechnologiesVariables
 */
export interface TopTechnologiesVariables extends TopCertificatesVariables {}
