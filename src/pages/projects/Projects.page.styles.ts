import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 1rem;
  width: 100%;
  background-image: linear-gradient(to bottom, rgb(30 47 55) 98%, rgb(25 33 44));

  & h6 {
    font-size: ${globalStylesVariables.textSize.extraSmall};
    color: ${globalStylesVariables.textColors.tertiary};

    & > span {
      color: ${globalStylesVariables.textColors.secondary};
      font-weight: 300;
    }
  }

  & > div {
    align-self: flex-start;
    margin-bottom: 4rem;

    & > span {
      font-size: ${globalStylesVariables.textSize.small};
    }
  }

  @media ${mediaQueries.tablet} {
    padding: 3rem 16rem;
  }
`;

const Title = styled.h1`
  padding-bottom: 2rem;
  width: 100%;
  color: ${globalStylesVariables.textColors.primary};
  font-size: ${globalStylesVariables.textSize.extraLarge};
  text-align: start;
`;

const Description = styled.p`
  padding-bottom: 3rem;
  width: 100%;
  color: ${globalStylesVariables.textColors.secondary};
  font-size: ${globalStylesVariables.textSize.semiLarge};
  text-align: start;
`;

const TimeLineContainer = styled.div`
  margin: 0 auto;

  @media ${mediaQueries.tablet} {
    width: 70%;
    margin-top: 2.5rem;
  }

  @media ${mediaQueries.desktop} {
    width: 50%;
  }
`;

export { Container, Title, Description, TimeLineContainer };
