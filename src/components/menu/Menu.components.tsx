import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import { useNavigationPages } from '../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { HamburgerButton, Image, MenuContainer, MenuItem, MenuList, MenuNav } from './Menu.components.styles';

/**
 * Data model for menu options (labels and text)
 *
 * @interface MenuOption
 */
interface MenuOption {
  /**
   * Id of the menu option
   *
   * @type {number}
   * @memberof MenuOption
   */
  id: number;
  /**
   * Label of the menu option
   *
   * @type {string}
   * @memberof MenuOption
   */
  label: string;
  /**
   * Link of the menu option
   *
   * @type {string}
   * @memberof MenuOption
   */
  link: string;
}

const Menu = () => {
  const logo = require('../../common/assets/images/logo.png'); // Personal logo import
  const { makeNavigation } = useNavigationPages();
  const {
    showMenu,
    user: { username },
    toggleMenu,
  } = useContext(AppContext);

  const menuItems: MenuOption[] = [
    { id: 1, label: 'Home', link: RoutesNavigation.Home },
    { id: 2, label: 'My projects', link: RoutesNavigation.Projects },
    { id: 3, label: 'Certificates', link: RoutesNavigation.Certificates },
    { id: 5, label: 'About me', link: RoutesNavigation.AboutMe },
  ];

  return (
    <MenuContainer>
      <Image>
        <a onClick={() => makeNavigation(RoutesNavigation.Home)} href="/">
          <img src={logo} alt="logo" />
          <span>{username}</span>
        </a>
      </Image>
      <HamburgerButton onClick={toggleMenu} showMenu={showMenu}>
        <span />
      </HamburgerButton>
      <MenuNav showMenu={showMenu}>
        <MenuList>
          {menuItems.map((item: MenuOption) => (
            <MenuItem key={item.id}>
              <a onClick={() => makeNavigation(item.link)}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
    </MenuContainer>
  );
};

export { Menu };
