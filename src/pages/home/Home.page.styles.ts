import styled from 'styled-components';
import { mediaQueries } from '../../common/style/styles';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to bottom, rgb(30 47 55) 98%, rgb(25 33 44));

  @media ${mediaQueries.desktop} {
    background-image: linear-gradient(to bottom, rgb(30 47 55) 95%, rgb(25 33 44));
  }
`;

const TransparentContainer = styled.div`
  padding: 5rem 0;

  @media ${mediaQueries.tablet} {
    padding: 10rem 0;
  }
`;

export { Container, TransparentContainer };
