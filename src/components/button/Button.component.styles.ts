import styled, { css } from 'styled-components';
import { ButtonType } from '../../common/interface/button.interface';
import { leftToRight } from '../../common/style/animations';
import { globalStylesVariables } from '../../common/style/styles';

const ButtonContainer = styled.div<{ type: ButtonType; withIcon: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  border: ${globalStylesVariables.border} ${globalStylesVariables.colors.secondary};
  transition: ${globalStylesVariables.transition};
  cursor: pointer;

  &:hover {
    background-color: ${globalStylesVariables.colors.secondary};
    border: ${globalStylesVariables.border} ${globalStylesVariables.colors.secondary};

    & > span {
      color: ${globalStylesVariables.textColors.primary};
    }

    & > svg {
      color: ${globalStylesVariables.textColors.primary};
    }
  }

  & > span {
    display: block;
    width: 100%;
    height: 100%;
    font-size: ${globalStylesVariables.textSize.medium};
    transition: ${globalStylesVariables.transition};
    margin-right: ${({ withIcon }) => (withIcon ? '1rem' : '0')};
    color: ${globalStylesVariables.textColors.tertiary};
  }

  & > svg {
    width: 3rem;
    height: 2rem;
    color: ${globalStylesVariables.textColors.tertiary};
    transition: ${globalStylesVariables.transition};
  }

  ${({ type }) =>
    type === 'active' &&
    css`
      padding: 1rem 2rem;
      background-color: ${globalStylesVariables.colors.alternative};
      box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, 0.75);

      & > span {
        color: ${globalStylesVariables.textColors.alternative};
      }

      &:hover {
        background-color: ${globalStylesVariables.colors.secondary};
        border-color: transparent;

        & > span {
          color: ${globalStylesVariables.textColors.primary};
        }

        & > svg {
          color: ${globalStylesVariables.textColors.primary};
        }
      }
    `}

  ${({ type }) =>
    type === 'normal' &&
    css`
      padding: 1rem 2.5rem;
      background-color: transparent;
      box-shadow: 1px 2px 5px 0px rgb(0, 0, 0, 0.75);
    `}

  ${({ type }) =>
    type === 'more' &&
    css`
      padding: 0.8rem 8rem;
      box-shadow: 1px 2px 5px 0px rgb(0, 0, 0, 0.75);

      &:hover {
        background-color: ${globalStylesVariables.colors.primary};
        border-color: transparent;
      }
    `}

  ${({ type }) =>
    type === 'link' &&
    css`
      padding: 1rem 0;
      border-radius: 0;
			border-color: ${globalStylesVariables.colors.secondary};

      & > svg {
        animation: ${leftToRight} ${globalStylesVariables.animation};
        animation-delay: ${Math.random()}; // Random Delay time for each component with the same animation
      }

      &:hover {
        background-color: transparent;
        border-bottom-color: ${globalStylesVariables.colors.alternative};

        & > span {
          color: ${globalStylesVariables.textColors.primary};
        }

        & > svg {
          color: ${globalStylesVariables.textColors.primary};
        }
      }
    `}
`;

export { ButtonContainer };
