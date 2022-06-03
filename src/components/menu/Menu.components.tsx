import React, { useState } from 'react';

import { HamburgerButton, MenuContainer, MenuItem, MenuList, MenuNav } from './Menu.components.styles';

/**
 * Data model for menu options (labels and text)
 *
 * @interface MenuOption
 */
interface MenuOption {
  id: number;
  label: string;
  link: string;
}

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuItems: MenuOption[] = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'My projects', link: '/' },
    { id: 3, label: 'Certificates', link: '/' },
    { id: 4, label: 'Technologies', link: '/' },
    { id: 5, label: 'About me', link: '/' },
  ];

  return (
    <MenuContainer>
      <div>
        <img src="../../common/assets/images/logo.png" alt="logo" />
      </div>
      <HamburgerButton onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
        <span />
      </HamburgerButton>
      <MenuNav showMenu={showMenu}>
        <MenuList>
          {menuItems.map((item: MenuOption) => (
            <MenuItem key={item.id}>
              <a href={item.link}>{item.label}</a>
            </MenuItem>
          ))}
          <MenuItem>
            <a href="#">Download CV</a>
          </MenuItem>
        </MenuList>
      </MenuNav>
    </MenuContainer>
  );
};

export { Menu };
