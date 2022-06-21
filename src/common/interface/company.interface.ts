/**
 * Data model for the company where the certificate is awarded
 *
 * @export Interface
 * @interface Company
 */
export interface Company {
  /**
   * Name of the company
   *
   * @type {string}
   * @memberof Company
   */
  name: string;
  /**
   * URL link to the company's website
   *
   * @type {string}
   * @memberof Company
   */
  link: string;
  /**
   * Icon of the company
   *
   * @type {string}
   * @memberof Company
   */
  icon: string;
}
