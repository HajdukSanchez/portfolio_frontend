/**
 * Helper to handle the navigation outside of the application
 *
 * @param {string} url - Url to navigate to
 */
const navigateOutside = (url: string) => {
  window.open(url, '_blank');
};

export { navigateOutside };
