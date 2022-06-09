import { CertificateByIDVariables, TopCertificatesVariables } from './certificate.interface';
import { Image } from './image.interface';
import { Technology } from './technology.interface';

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
  id: string;
  /**
   * Name of the project
   *
   * @type {string}
   * @memberof Project
   */
  name: string;
  /**
   * Picture URL of the project
   *
   * @type {Image}
   * @memberof Project
   */
  cover: Image;
  /**
   * Description of the project
   *
   * @type {string}
   * @memberof Project
   */
  shortDescription?: string;
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
  /**
   * Complete description of the project
   *
   * @type {string}
   * @memberof Project
   */
  description?: string;
  /**
   * Link to the project page
   *
   * @type {string}
   * @memberof Project
   */
  projectPageUrl?: string;
  /**
   * Flag indicating if the project is outstanding
   *
   * @type {boolean}
   * @memberof Project
   */
  outstanding?: boolean;
  /**
   * Array of technologies used in the project
   *
   * @type {Technology[]}
   * @memberof Project
   */
  technologies?: Technology[];
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
 * @export Interface
 * @interface TopTechnologiesVariables
 */
export interface TopProjectsVariables extends TopCertificatesVariables {}

/**
 * Data model for variables used in the GET_PROJECT_BY_ID query
 *
 * @export Interface
 * @interface ProjectByIDVariables
 * @extends {CertificateByIDVariables}
 */
export interface ProjectByIDVariables extends CertificateByIDVariables {}
