import { createContext, ReactNode, useState } from 'react';
import { AppContextProps } from '../common/interface/appContext.interface';

interface AppContextProviderProps {
  children: ReactNode | ReactNode[];
}

const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const returnValue: AppContextProps = {
    showMenu,
    toggleMenu,
  };

  return <AppContext.Provider value={returnValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
