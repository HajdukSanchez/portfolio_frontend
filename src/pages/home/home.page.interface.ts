/**
 * Data model for Home section in HomePage
 *
 * @export Interface
 * @interface HomeSectionProps
 */
export interface HomeSectionProps {
  /**
   * Top description text
   *
   * @type {string}
   * @memberof HomeSectionProps
   */
  description: string;
}

/**
 * Data model for technologies section in HomePage
 *
 * @export Interface
 * @interface TechnologySectionProps
 */
export interface TechnologySectionProps {
  /**
   * Title of the section
   *
   * @type {string}
   * @memberof TechnologySectionProps
   */
  title: string;
}

/**
 * Data model for certificates section in HomePage
 *
 * @export Interface
 * @interface CertificateSectionProps
 * @extends {TechnologySectionProps}
 */
export interface CertificateSectionProps extends TechnologySectionProps {
  /**
   * SubTitle of the section
   *
   * @type {string}
   * @memberof CertificateSectionProps
   */
  subTitle: string;
}

/**
 * Data model for projects section in HomePage
 *
 * @export Interface
 * @interface ProjectSectionProps
 * @extends {CertificateSectionProps}
 */
export interface ProjectSectionProps extends CertificateSectionProps {}

/**
 * Data model for information getted from the query
 *
 * @export Interface
 * @interface HomePageSectionsData
 */
export interface HomePageSectionsData {
  /**
   * Data of the Home section
   *
   * @type {HomeSectionProps}
   * @memberof HomePageSectionsData
   */
  home: HomeSectionProps;
  /**
   * Data of the Technologies section
   *
   * @type {TechnologySectionProps}
   * @memberof HomePageSectionsData
   */
  technologies: TechnologySectionProps;
  /**
   * Data of the Certificates section
   *
   * @type {CertificateSectionProps}
   * @memberof HomePageSectionsData
   */
  certificates: CertificateSectionProps;
  /**
   * Data of the Projects section
   *
   * @type {ProjectSectionProps}
   * @memberof HomePageSectionsData
   */
  projects: ProjectSectionProps;
}
