import { ProjectsPageData } from '../projects/projects.page.interface';

/**
 * Data model for information of the certificates page
 *
 * @export Interface
 * @interface CertificatesPageData
 * @extends {Omit<ProjectsPageData, 'buttonText'>}
 */
export interface CertificatesPageData extends Omit<ProjectsPageData, 'buttonText'> {}
