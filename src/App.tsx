import React, { ReactNode } from 'react';

import { Navigation } from './navigation/Navigation';
import { AppContextProvider } from './context/AppContext';

interface AppStateProps {
  children: ReactNode | ReactNode[];
}

const App = () => {
  return (
    <_AppState>
      <Navigation />
    </_AppState>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export { App };
