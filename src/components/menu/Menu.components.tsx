import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import { HamburgerButton, Image, MenuContainer, MenuItem, MenuList, MenuNav } from './Menu.components.styles';

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
  const logo = require('../../common/assets/images/logo.png'); // Personal logo import
  const { showMenu, toggleMenu } = useContext(AppContext);
  const menuItems: MenuOption[] = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'My projects', link: '/' },
    { id: 3, label: 'Certificates', link: '/' },
    { id: 5, label: 'About me', link: '/' },
  ];

  return (
    <MenuContainer>
      <Image>
        <a href="/">
          <img src={logo} alt="logo" />
					<span>Jozek Hajduk</span>
        </a>
      </Image>
      <HamburgerButton onClick={toggleMenu} showMenu={showMenu}>
        <span />
      </HamburgerButton>
      <MenuNav showMenu={showMenu}>
        <MenuList>
          {menuItems.map((item: MenuOption) => (
            <MenuItem key={item.id}>
              <a href={item.link}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
    </MenuContainer>
  );
};

export { Menu };
