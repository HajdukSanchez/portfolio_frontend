import styled from 'styled-components';
import { globalStylesVariables } from '../../common/style/styles';

const ButtonContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: ${globalStylesVariables.border} ${globalStylesVariables.colors.alternative};
  background-color: transparent;
  transition: ${globalStylesVariables.transition};
  cursor: pointer;

  &:hover {
    background-color: ${globalStylesVariables.colors.alternative};
  }

  & span {
    display: block;
    width: 100%;
    height: 100%;
    font-size: ${globalStylesVariables.text.text};
    color: ${globalStylesVariables.text.colors.secondary};
    transition: ${globalStylesVariables.transition};

    &:hover {
      color: ${globalStylesVariables.text.colors.alternative};
    }
  }
`;

export { ButtonContainer };
