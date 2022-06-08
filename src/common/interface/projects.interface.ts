import { TopCertificatesVariables } from './certificate.interface';

/**
 * Data model for projects shown in the Home page
 *
 * @export Interface
 * @interface Projects
 */
export interface Project {
  /**
   * Unique ID of the project
   *
   * @type {string}
   * @memberof Project
   */
  uid: string;
  /**
   * Name of the project
   *
   * @type {string}
   * @memberof Project
   */
  name: string;
  /**
   * Description of the project
   *
   * @type {string}
   * @memberof Project
   */
  shortDescription?: string;
  /**
   * Picture URL of the project
   *
   * @type {string}
   * @memberof Project
   */
  cover: string;
  /**
   * Array of tags of the project
   *
   * @type {Tag[]}
   * @memberof Project
   */
  tags?: Tag[];
  /**
   * Date of the project creation or last update
   *
   * @type {string}
   * @memberof Project
   */
  date?: string;
  /**
   * Link to the project repository
   *
   * @type {string}
   * @memberof Project
   */
  githubUrl?: string;
}

/**
 * Data model for Tags in the Projects
 *
 * @export Interface
 * @interface Tag
 */
export interface Tag {
  /**
   * Name of the tag
   *
   * @type {string}
   * @memberof Tag
   */
  name: string;
}

/**
 * Data model for variables used in the GET_TOP_PROJECTS query
 *
 * @export interface
 * @interface TopTechnologiesVariables
 */
export interface TopProjectsVariables extends TopCertificatesVariables {}
