import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Card = styled.article`
  position: relative;
  margin: 0 4rem 0 0;
  width: 70%;
  min-width: 25rem;
  max-width: 30rem;
  border-radius: ${globalStylesVariables.borderRadius};
  transform: scale(1);
  transition: ${globalStylesVariables.transition};
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 1px 2px 5px 0px transparent;
  cursor: pointer;
  max-height: 30rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${globalStylesVariables.boxShadow};
  }
`;

const Badge = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  & > img {
    border-radius: inherit;
  }
`;

const Image = styled.div`
  width: 100%;
  border-radius: ${globalStylesVariables.borderRadius};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${globalStylesVariables.borderRadius};
  }
`;

const Information = styled.div`
  padding: 1rem 2rem;
  height: 30%;
  text-align: center;

  & > h5 {
    padding-bottom: 0.5rem;
    font-size: ${globalStylesVariables.textSize.extraSmall};
    color: ${globalStylesVariables.textColors.secondary};
  }
`;

const Title = styled.h4`
  padding-bottom: 1rem;
  font-size: ${globalStylesVariables.textSize.medium};
  color: ${globalStylesVariables.textColors.primary};
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export { Card, Badge, Image, Information, Title };
