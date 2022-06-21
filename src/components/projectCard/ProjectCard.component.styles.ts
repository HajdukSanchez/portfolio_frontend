import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
  max-height: 35rem;
  border-radius: ${globalStylesVariables.borderRadius};
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

const Information = styled.div`
  padding: 0 0 1.5rem;

  & h2 {
    font-size: ${globalStylesVariables.textSize.medium};
    color: ${globalStylesVariables.textColors.primary};
    text-transform: capitalize;
  }

  & p {
    font-size: ${globalStylesVariables.textSize.small};
    color: ${globalStylesVariables.textColors.secondary};
  }
`;

const ButtonContainer = styled.div<{ isVisible: boolean }>`
  margin-bottom: 5rem;
  width: 70%;

  & > div > svg {
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  }

  @media ${mediaQueries.tablet} {
    width: 45%;
  }
`;

export { Card, Image, Information, ButtonContainer };
