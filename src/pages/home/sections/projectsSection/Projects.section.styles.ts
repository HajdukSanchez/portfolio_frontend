import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../../../common/style/styles';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  background-color: ${globalStylesVariables.colors.secondary};
  width: 100%;

  & > div:last-child {
    align-self: center;
  }

  @media ${mediaQueries.tablet} {
    padding: 10rem 10rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 10rem 16rem;
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    padding-bottom: 8rem;
  }

  & > h1 {
    padding-bottom: 1rem;
    font-size: ${globalStylesVariables.textSize.extraLarge};
    color: ${globalStylesVariables.textColors.primary};

    @media ${mediaQueries.tablet} {
      width: 60%;
    }
  }

  & h5 {
    text-align: center;
    font-size: ${globalStylesVariables.textSize.medium};
    color: ${globalStylesVariables.textColors.secondary};

    @media ${mediaQueries.tablet} {
      width: 40%;
    }
  }
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${mediaQueries.tablet} {
    width: 50%;

    &:first-child {
      padding-right: 1rem;
    }

    &:last-child {
      padding-top: 8rem;
      padding-left: 1rem;
    }
  }
`;

export { Section, Titles, ProjectsList, ProjectsColumn };
