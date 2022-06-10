import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const MenuContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: ${globalStylesVariables.colors.primary};
  border-bottom: 0.01rem solid ${globalStylesVariables.colors.alternativeOpacity};
  z-index: ${globalStylesVariables.zIndex.level3};

  @media ${mediaQueries.tablet} {
    padding: 0 1rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 10rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 0 16rem;
  }
`;

const Image = styled.div`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img {
      width: 1.5rem;
    }

    & > span {
      margin-left: 1rem;
      color: white;
      font-size: 1.4rem;
      font-weight: 500;
    }
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
  z-index: ${globalStylesVariables.zIndex.level3};

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
  font-size: ${globalStylesVariables.textSize.small};
  font-weight: 500;
  background-color: ${globalStylesVariables.colors.alternative};
  transform: translateX(0);
  transition: all ${globalStylesVariables.transition};
  cursor: pointer;

  &:hover {
    transform: translateX(1.5rem);

    @media ${mediaQueries.tablet} {
      transform: translateX(0);
      border-bottom-color: ${globalStylesVariables.colors.alternative};
    }
  }

  &:last-child {
    margin-right: 0;
  }

  & a {
    color: ${globalStylesVariables.textColors.tertiary};
  }

  @media ${mediaQueries.tablet} {
    margin: 0 2rem;
    padding: 1.5rem 0;
    background: initial;
    border: 0;
    border-radius: 0;
    border-bottom: 0.2rem solid transparent;
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
  z-index: ${globalStylesVariables.zIndex.level4};

  & span {
    position: relative;
    display: inline-block;
    width: 90%;
    height: 0.3rem;
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
    height: 0.3rem;
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

export { MenuContainer, Image, MenuNav, MenuList, MenuItem, HamburgerButton };
