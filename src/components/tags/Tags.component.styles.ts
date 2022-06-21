import styled from 'styled-components';
import { globalStylesVariables } from '../../common/style/styles';

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem 0;
	width: 100%;

  & span {
    margin-right: 1rem;
    padding-bottom: 0.5rem;
    font-size: ${globalStylesVariables.textSize.small};
    color: ${globalStylesVariables.textColors.primary};
    opacity: 0.7;
  }
`;

export { TagsContainer };
