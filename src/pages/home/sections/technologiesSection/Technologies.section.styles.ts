import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../../../common/style/styles';

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1rem;
  width: 100%;
  background-color: ${globalStylesVariables.colors.secondary};

  @media ${mediaQueries.desktop} {
    padding: 4rem 10rem 10rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 4rem 16rem 10rem;
  }
`;

const Title = styled.h5`
  padding-bottom: 2rem;
  font-size: ${globalStylesVariables.textSize.large};
	color: ${globalStylesVariables.textColors.primary};
`;

const TechnologiesList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;

  @media ${mediaQueries.tablet} {
    justify-content: flex-start;
  }
`;

export { Section, Title, TechnologiesList };
