import { Company } from './company.interface';
import { Image } from './image.interface';

/**
 * Data model for a project card
 *
 * @export interface
 * @interface Certificate
 */
export interface Certificate {
  /**
   * The unique identifier of the certificate
   *
   * @type {string}
   * @memberof Certificate
   */
  id: string;
  /**
   * The name of the certificate
   *
   * @type {string}
   * @memberof Certificate
   */
  name: string;
  /**
   * The image of the certificate
   *
   * @type {Image}
   * @memberof Certificate
   */
  image: Image;
  /**
   * The date of the certificate
   *
   * @type {string}
   * @memberof Certificate
   */
  date?: string;
  /**
   * The comment of the certificate
   *
   * @type {string}
   * @memberof Certificate
   */
  comment?: string;
  /**
   * The badge picture of the certificate
   *
   * @type {Image}
   * @memberof Certificate
   */
  badgePicture?: Image;
  /**
   * Value to know if that is a favorite certificate
   *
   * @type {boolean}
   * @memberof Certificate
   */
  outstanding?: boolean;
  /**
   * The link to the course of the certificate
   *
   * @type {string}
   * @memberof Certificate
   */
  courseLink?: string;
  /**
   * The company where the certificate is awarded
   *
   * @type {Company}
   * @memberof Certificate
   */
  company?: Company;
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

/**
 * Data model for variable used in the GET_CERTIFICATE_BY_ID query
 *
 * @export Interface
 * @interface CertificateByIDVariables
 */
export interface CertificateByIDVariables {
  /**
   * ID of the certificate to retrieve
   *
   * @type {string}
   * @memberof CertificateByIDVariables
   */
  id: string;
}
