import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background-color: ${globalStylesVariables.colors.primary};

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 4rem;
  font-size: ${globalStylesVariables.text.title};
  color: ${globalStylesVariables.text.colors.primary};

  @media ${mediaQueries.tablet} {
    margin: 0;
    transform: translateY(10rem);
  }
`;

const Image = styled.div`
  margin-bottom: 5rem;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
  }

  @media ${mediaQueries.tablet} {
    width: 45%;
    margin: 0;
  }
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & p {
    margin-bottom: 4rem;
    color: ${globalStylesVariables.text.colors.primary};
    text-align: center;
    font-size: ${globalStylesVariables.text.text};
  }

  @media ${mediaQueries.tablet} {
    width: 50%;
  }
`;

export { Section, Image, Title, Information };
