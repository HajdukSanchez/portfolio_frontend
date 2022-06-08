import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
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
  const navigation = useNavigate();
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

  const handleNavigation = (link: string) => {
    navigation(link);
    toggleMenu();
  };

  return (
    <MenuContainer>
      <Image>
        <Link to={RoutesNavigation.Home}>
          <img src={logo} alt="logo" />
          <span>{username}</span>
        </Link>
      </Image>
      <HamburgerButton onClick={toggleMenu} showMenu={showMenu}>
        <span />
      </HamburgerButton>
      <MenuNav showMenu={showMenu}>
        <MenuList>
          {menuItems.map((item: MenuOption) => (
            <MenuItem key={item.id}>
              <a onClick={() => handleNavigation(item.link)}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNav>
    </MenuContainer>
  );
};

export { Menu };
