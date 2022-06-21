import React, { ReactNode } from 'react';

import { Menu, Footer } from '../';

/**
 * Data model for the props of the component
 *
 * @interface LayoutProps
 */
interface LayoutProps {
  /**
   * Children to render in the layout
   *
   * @type {(ReactNode | ReactNode[])}
   * @memberof LayoutProps
   */
  children?: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
