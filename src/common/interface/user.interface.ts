import { Image } from "./image.interface";

/**
 * Data model for the user.
 *
 * @export Interface
 * @interface User
 */
export interface User {
  /**
   * User name
   *
   * @type {string}
   * @memberof User
   */
  name: string;
  /**
   * User last name
   *
   * @type {string}
   * @memberof User
   */
  lastName: string;
  /**
   * LinkedIn profile
   *
   * @type {string}
   * @memberof User
   */
  linkedIn: string;
  /**
   * GitHub profile
   *
   * @type {string}
   * @memberof User
   */
  gitHub: string;
  /**
   * Twitter profile
   *
   * @type {string}
   * @memberof User
   */
  twitter: string;
  /**
   * User email
   *
   * @type {string}
   * @memberof User
   */
  email: string;
  /**
   * User phone number
   *
   * @type {number}
   * @memberof User
   */
  cellphone: number;
  /**
   * User proffesion
   *
   * @type {string}
   * @memberof User
   */
  profession: string;
  /**
   * User username
   *
   * @type {string}
   * @memberof User
   */
  username: string;
  /**
   * User about him description
   *
   * @type {string}
   * @memberof User
   */
  about: string;
  /**
   * User avatar
   *
   * @type {Image}
   * @memberof User
   */
  picture?: Image;
  /**
   * User CV link
   *
   * @type {string}
   * @memberof User
   */
  cv?: string;
}
