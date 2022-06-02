import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';

import { App } from './App';
import { client } from './api/apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/**
 * Props for AppState component
 *
 * @interface AppStateProps
 */
interface AppStateProps {
  children: ReactNode | ReactNode[];
}

/**
 * This components contains the Contexts and the ApolloProvider
 *
 * @param {AppStateProps} { children } - The children of the component to render
 * @return {*}
 */
const _AppState = ({ children }: AppStateProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

root.render(
  <React.StrictMode>
    <_AppState>
      <App />
    </_AppState>
  </React.StrictMode>
);
