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

const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  /* & > article {
    margin: 1rem;

    @media ${mediaQueries.tablet} {
      /* This is for tablet in the own component
      &:nth-child(2n + 1) {
        align-self: flex-end;
      }

      &:nth-child(2n) {
        align-self: flex-start;
      }
    }
  } */

  @media ${mediaQueries.tablet} {
    width: 70%;
    margin-top: 2.5rem;
  }

  @media ${mediaQueries.desktop} {
    width: 50%;
  }
`;

export { Container, Title, Description, CertificatesContainer };
