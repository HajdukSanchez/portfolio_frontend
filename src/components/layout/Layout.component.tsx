import React, { ReactNode } from 'react';

import { Menu, Footer } from '../';

interface LayoutProps {
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
