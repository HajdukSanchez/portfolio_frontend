import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  &:hover {
    & h6 {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media ${mediaQueries.tablet} {
    &:first-child {
      margin-left: 0;
    }
  }
`;

const Image = styled.div`
  margin-bottom: 1rem;
  width: 10rem;
  border-radius: ${globalStylesVariables.borderRadius};

  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

const Text = styled.h6`
  font-size: ${globalStylesVariables.textSize.small};
	color: ${globalStylesVariables.textColors.tertiary};
  transform: translateY(-2rem);
  transition: ${globalStylesVariables.transition};
  opacity: 0;
`;

export { TechnologyContainer, Image, Text };
