import styled, { css } from 'styled-components';
import { globalStylesVariables } from '../../common/style/styles';

const Tag = styled.div<{ hasOnClick: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  color: ${globalStylesVariables.textColors.primary};
  transition: ${globalStylesVariables.transition};
  cursor: ${(props) => (props.hasOnClick ? 'pointer' : 'default')};

  & > span {
    margin-right: 1rem;
    font-size: ${globalStylesVariables.textSize.small};
  }

  & > h2 {
    font-size: ${globalStylesVariables.textSize.small};
  }

  ${(props) =>
    props.hasOnClick &&
    css`
      &:hover {
        color: ${globalStylesVariables.textColors.tertiary};
      }
    `}
`;

export { Tag };
