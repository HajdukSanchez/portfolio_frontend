/**
 * Method to calculta de month difference between two dates
 *
 * @param {string} date1 - First date
 * @param {string} date2 - Second date
 * @return {*}  {number} - Number of months between two dates
 */
const monthDifference = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const months = (d2.getFullYear() - d1.getFullYear()) * 12;
  return months + d2.getMonth() - d1.getMonth();
};

export { monthDifference };
