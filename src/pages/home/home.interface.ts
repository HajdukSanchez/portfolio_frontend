//* Home Page
export interface HomePage {
  data: HomePageData;
}
export interface HomePageData {
  homePage: HomePageClass;
}
export interface HomePageClass {
  data: HomePageAttributes;
}
export interface HomePageAttributes {
  attributes: HomePageDataAttributes;
}
export interface HomePageDataAttributes {
  // profile: Profile;
  // technologies: Technologies;
  // certificates: Certificates;
  // projects: Projects;
}