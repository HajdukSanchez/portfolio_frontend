import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../../../common/style/styles';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 4rem;
  width: 100%;
  background-color: ${globalStylesVariables.colors.secondary};

  @media ${mediaQueries.tablet} {
    padding: 5rem 10rem 2rem;
  }

  @media ${mediaQueries.desktop} {
    padding: 0 10rem 2rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 0 10rem 2rem;
  }
`;

const SubTitle = styled.h4`
  padding-bottom: 1rem;
  text-transform: uppercase;
  font-size: ${globalStylesVariables.textSize.large};
  color: ${globalStylesVariables.textColors.secondary};
`;

const Title = styled.h1`
  padding: 0 1rem 3rem;
  font-size: ${globalStylesVariables.textSize.extraLarge};
  color: ${globalStylesVariables.textColors.primary};
`;

const CertificateCardList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 5rem 0;
  width: 100%;
  overflow-x: auto;
	overflow-y: unset;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${mediaQueries.tablet} {
    padding: 10rem 0 5rem;
  }

  @media ${mediaQueries.desktop} {
    justify-content: center;
    padding: 10rem 0 5rem;
  }
`;

export { Section, SubTitle, Title, CertificateCardList };
