import styled from 'styled-components';
import { jummping } from '../../../../common/style/animations';
import { globalStylesVariables, mediaQueries } from '../../../../common/style/styles';

const Section = styled.section<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem 1rem;
  background-color: ${globalStylesVariables.colors.primary};
  background-image: url('https://s3.medialoot.com/blog-images/abstract-wire-mesh-wave/17.jpg');

  & > svg {
    position: relative;
    bottom: -3rem;
    right: 1rem;
    align-self: flex-end;
    width: 4rem;
    height: 7rem;
    color: ${globalStylesVariables.colors.alternativeOpacity};
    animation: ${jummping} ${globalStylesVariables.animation};
    z-index: ${globalStylesVariables.zIndex.level2};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

    @media ${mediaQueries.tablet} {
      width: 5rem;
      right: 4rem;
    }
  }

  @media ${mediaQueries.desktop} {
    padding: 12rem 10rem 5rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 12rem 16rem 5rem;
  }
`;

const Title = styled.h4`
  padding-bottom: 2rem;
  color: ${globalStylesVariables.textColors.primary};
  font-size: ${globalStylesVariables.textSize.medium};
`;

const Description = styled.h1`
  padding-bottom: 3rem;
  color: ${globalStylesVariables.textColors.primary};
  font-size: ${globalStylesVariables.textSize.extraLarge};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  & div:first-child {
    margin-bottom: 1.5rem;
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;

    & div:first-child {
      margin-right: 1.5rem;
      margin-bottom: 0rem;
    }
  }
`;

export { Section, Title, Description, ButtonContainer };
