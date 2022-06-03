import React, { ReactNode } from 'react';
import { Menu } from '../';

interface LayoutProps {
  children?: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export { Layout };
