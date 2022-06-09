import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem 8rem;
  background-color: ${globalStylesVariables.colors.secondary};

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    align-items: flex-start;
    padding: 5rem;
    padding-bottom: 10rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 5rem 10rem 10rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 5rem 16rem 10rem;
  }
`;

const PrincipalImage = styled.div`
  width: 100%;
  padding-bottom: 2rem;

  @media ${mediaQueries.tablet} {
    padding: 5rem;
    padding-top: 0;
  }
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > h1,
  & > h6 {
    padding-bottom: 1rem;
  }

  & > h1 {
    text-transform: capitalize;
    color: ${globalStylesVariables.textColors.primary};
    font-size: ${globalStylesVariables.textSize.extraLarge};
  }

  & > h6 {
    color: ${globalStylesVariables.textColors.tertiary};
    font-size: ${globalStylesVariables.textSize.extraSmall};
  }

  & > a {
    color: ${globalStylesVariables.textColors.secondary};
    font-size: ${globalStylesVariables.textSize.small};
    padding-bottom: 2rem;
  }

  & > p {
    color: ${globalStylesVariables.textColors.alternative};
    font-size: ${globalStylesVariables.textSize.semiLarge};
  }
`;

const InformationTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > span,
  & > a {
    font-size: 3rem;
    color: ${globalStylesVariables.textColors.tertiary};
  }

  & > span {
    margin-right: 2rem;
  }

  & > a {
    margin-left: 2rem;
  }

  & > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;

export { Container, PrincipalImage, Information, InformationTop, InformationContainer };
