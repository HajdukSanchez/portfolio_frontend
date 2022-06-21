import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${globalStylesVariables.colors.primary};

  @media ${mediaQueries.desktop} {
    padding: 2rem 10rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 2rem 16rem;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 3rem;
  width: 100%;
  background: ${globalStylesVariables.colors.secondary};
  transform: translateY(-5rem);
  border-radius: 0.4rem;
  box-shadow: ${globalStylesVariables.boxShadow};

  & > h3 {
    padding-bottom: 1rem;
    width: 100%;
    font-size: ${globalStylesVariables.textSize.small};
    color: ${globalStylesVariables.textColors.primary};
    text-align: start;
    text-transform: uppercase;
  }

  & > p {
    padding-bottom: 3rem;
    width: 100%;
    font-size: ${globalStylesVariables.textSize.large};
    color: ${globalStylesVariables.textColors.secondary};
    text-align: start;
  }

  @media ${mediaQueries.desktop} {
    transform: translateY(-10rem);

    & > h3,
    & > p {
      padding-left: 10rem;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  width: 100%;

  & > h4 {
    font-size: ${globalStylesVariables.textSize.extraSmall};
    color: ${globalStylesVariables.textColors.primary};
    padding-bottom: 2rem;
    font-weight: 300;

    @media ${mediaQueries.desktop} {
      padding-bottom: 0;
    }
  }

  @media ${mediaQueries.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Email = styled.div`
  padding-bottom: 4rem;
  width: 100%;
  font-size: ${globalStylesVariables.textSize.small};

  & > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${globalStylesVariables.textColors.secondary};
    transition: ${globalStylesVariables.transition};

    &:hover {
      color: ${globalStylesVariables.textColors.tertiary};
    }

    color: ${globalStylesVariables.textColors.secondary};
    & > span {
      margin-left: 1rem;
    }
  }

  @media ${mediaQueries.desktop} {
    padding-bottom: 0;
    width: auto;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > a {
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 100%;
    background-color: transparent;
    color: ${globalStylesVariables.textColors.tertiary};
    font-size: ${globalStylesVariables.textSize.large};
    transition: ${globalStylesVariables.transition};

    &:hover {
      color: ${globalStylesVariables.textColors.primary};
      background-color: ${globalStylesVariables.colors.secondary};
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export { FooterContainer, Information, Contact, Email, Socials };
