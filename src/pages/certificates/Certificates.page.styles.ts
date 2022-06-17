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
    padding: 3rem 10rem;
  }

  @media ${mediaQueries.desktop} {
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  & > article {
    margin-left: 4rem;
    margin-bottom: 2rem;
  }

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin-top: 2.5rem;
  }
`;

export { Container, Title, Description, CertificatesContainer };
