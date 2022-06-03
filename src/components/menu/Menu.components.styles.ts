import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const MenuContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${globalStylesVariables.colors.primary};

  @media ${mediaQueries.desktop} {
    padding: 1rem 10rem;
  }
`;

const MenuNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${globalStylesVariables.colors.primary};
  transition: all ${globalStylesVariables.transition};

  @media ${mediaQueries.tablet} {
    position: static;
    transform: translateX(0);
  }

  ${({ showMenu }) => (showMenu ? 'transform: translateX(0vw)' : 'transform: translateX(-100vw)')}
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
  }
`;

const MenuItem = styled.li`
  margin: 1.5rem 0;
  padding: 1rem 2rem;
  border: ${globalStylesVariables.border} ${globalStylesVariables.colors.alternative};
  border-radius: ${globalStylesVariables.borderRadius};
  text-align: center;
  font-size: ${globalStylesVariables.text.text};
  background-color: ${globalStylesVariables.colors.alternative};
  transform: translateX(0);
  transition: all ${globalStylesVariables.transition};
  cursor: pointer;

  &:hover {
    transform: translateX(1.5rem);

    @media ${mediaQueries.tablet} {
      transform: translateX(0);
    }
  }

  &:last-child {
    border-color: ${globalStylesVariables.colors.alternative};
    background-color: ${globalStylesVariables.colors.secondary};

    & a {
      color: ${globalStylesVariables.text.colors.secondary};
    }
  }

  & a {
    color: ${globalStylesVariables.text.colors.primary};
  }

  @media ${mediaQueries.tablet} {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    background: initial;
  }
`;

const HamburgerButton = styled.button<{ showMenu: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 3rem;
  height: 3rem;
  padding-top: 0.6rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  z-index: 100;

  & span {
    position: relative;
    display: inline-block;
    width: 90%;
    height: 0.4rem;
    border-radius: ${globalStylesVariables.borderRadius};
    background-color: ${globalStylesVariables.colors.alternative};
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 0.4rem;
    border-radius: ${globalStylesVariables.borderRadius};
    background: ${globalStylesVariables.colors.alternative};
    transition: all ${globalStylesVariables.transition};
  }

  span::before {
    bottom: -0.8rem;
    ${({ showMenu }) => (showMenu ? 'width: 70%' : 'width: 100%')}
  }

  span::after {
    bottom: -1.6rem;
    ${({ showMenu }) => (showMenu ? 'width: 50%' : 'width: 100%')}
  }

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

export { MenuContainer, MenuNav, MenuList, MenuItem, HamburgerButton };
