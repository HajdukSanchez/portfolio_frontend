import { User } from './user.interface';

/**
 * Data returned by the AppContextProvider.
 */
export type AppContextProps = {
  /**
   * User
   *
   * @type {User}
   */
  user: User;
  /**
   * Value to know if the menu is open or not
   *
   * @type {boolean}
   */
  showMenu: boolean;
  /**
   * Function to toggle the menu
   *
   */
  toggleMenu: () => void;
};
