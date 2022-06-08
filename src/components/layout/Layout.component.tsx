import React, { ReactNode } from 'react';

import { Menu, Footer } from '../';
import { TransparentContainer } from '../../pages/home/Home.page.styles';

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
