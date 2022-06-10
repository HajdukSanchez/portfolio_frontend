import React, { ReactNode } from 'react';

import { Navigation } from './navigation/Navigation';
import { AppContextProvider } from './context/AppContext';

/**
 * Data model for the props of the component
 *
 * @interface AppStateProps
 */
interface AppStateProps {
  /**
   * Children to render
   *
   * @type {(ReactNode | ReactNode[])}
   * @memberof AppStateProps
   */
  children: ReactNode | ReactNode[];
}

/**
 * This component is used to wrap the app with the contexts providers
 *
 * @param {AppStateProps} { children } - Children to render
 * @return {*}
 */
const _AppState = ({ children }: AppStateProps) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

const App = () => {
  return (
    <_AppState>
      <Navigation />
    </_AppState>
  );
};

export { App };
