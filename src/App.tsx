import React, { ReactNode } from 'react';

import { HomePage } from './pages';
import { Layout } from './components';
import { AppContextProvider } from './context/AppContext';

interface AppStateProps {
  children: ReactNode | ReactNode[];
}

const App = () => {
  return (
    <_AppState>
      <Layout>
        <HomePage />
      </Layout>
    </_AppState>
  );
};

const _AppState = ({ children }: AppStateProps) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export { App };
