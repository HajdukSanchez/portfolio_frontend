import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Container = styled.main`
  padding: 2rem 1rem 6rem;
  background-color: ${globalStylesVariables.colors.primary};

  @media ${mediaQueries.desktop} {
    padding: 2rem 16rem 15rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${globalStylesVariables.colors.secondary};
  border-radius: ${globalStylesVariables.borderRadius};

  @media ${mediaQueries.tablet} {
    flex-direction: row-reverse;
  }
`;

const Information = styled.div`
  & > h1 {
    font-size: ${globalStylesVariables.textSize.extraLarge};
    color: ${globalStylesVariables.textColors.primary};
  }

  & > h4 {
    font-size: ${globalStylesVariables.textSize.medium};
    color: ${globalStylesVariables.textColors.tertiary};
    padding-bottom: 2rem;
  }

  & > p {
    font-size: ${globalStylesVariables.textSize.small};
    color: ${globalStylesVariables.textColors.secondary};
    padding-bottom: 2rem;
  }

  @media ${mediaQueries.tablet} {
    width: 60%;

    & > div:last-child {
      width: 65%;
    }
  }
`;

const InfoTagList = styled.div`
  padding-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    padding-bottom: 2rem;
  }
`;

const Image = styled.div`
  margin-top: 4rem;
  border-radius: ${globalStylesVariables.borderRadius};

  & > img {
    border-radius: inherit;
  }

  @media ${mediaQueries.tablet} {
    position: sticky;
    top: 7rem;
    margin-top: 0;
    margin-right: 4rem;
    width: 40%;
  }
`;

export { Container, Card, Information, InfoTagList, Image };
