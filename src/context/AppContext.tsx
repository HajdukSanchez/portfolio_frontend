import { createContext, ReactNode, useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_USER } from '../common/graphql/user.query';
import { User } from '../common/interface/user.interface';
import { AppContextProps } from '../common/interface/appContext.interface';

interface AppContextProviderProps {
  children: ReactNode | ReactNode[];
}

const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const { data } = useQuery(GET_USER, { variables: { uid: 1 } });

  useEffect(() => {
    _getUserInfo();
  }, [data]);

  const _getUserInfo = () => {
    if (data) {
      const dataUser = data.profile.data.attributes;
      const newUser: User = {
        cv: dataUser.cv,
        name: dataUser.name,
        lastName: dataUser.lastName,
        username: dataUser.username,
        linkedIn: dataUser.linkedIn,
        gitHub: dataUser.gitHub,
        twitter: dataUser.twitter,
        email: dataUser.email,
        profession: dataUser.profession,
        about: dataUser.about,
        cellphone: dataUser.cellphone,
        picture: dataUser.picture ?? '',
      };
      setUser(newUser);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const returnValue: AppContextProps = {
    user,
    showMenu,
    toggleMenu,
  };

  return <AppContext.Provider value={returnValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
