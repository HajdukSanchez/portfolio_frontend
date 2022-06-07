import { User } from './user.interface';

/**
 * Data returned by the AppContextProvider.
 */
export type AppContextProps = {
  user: User;
  showMenu: boolean;
  toggleMenu: () => void;
};
