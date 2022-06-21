import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${globalStylesVariables.colors.primary};
  border-radius: ${globalStylesVariables.borderRadius};
  box-shadow: ${globalStylesVariables.boxShadow};
`;

const Image = styled.div`
  width: 25%;
  max-height: 15rem;
  border-radius: ${globalStylesVariables.borderRadius};

  & > img {
    border-radius: inherit;
    object-fit: cover;
    object-position: top;
  }

  @media ${mediaQueries.tablet} {
    width: 35%;
  }
`;

const Information = styled.div`
  padding-left: 2rem;
  width: 70%;

  & > h2 {
    color: ${globalStylesVariables.textColors.primary};
    font-size: ${globalStylesVariables.textSize.small};
    text-transform: capitalize;
    padding-bottom: 1rem;
  }

  & > p {
    color: ${globalStylesVariables.textColors.secondary};
    font-size: ${globalStylesVariables.textSize.extraSmall};
  }

  @media ${mediaQueries.tablet} {
    width: 45%;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  & > a {
    margin-left: 2rem;
    font-size: ${globalStylesVariables.textSize.large};
    color: ${globalStylesVariables.textColors.primary};
  }

  @media ${mediaQueries.tablet} {
    width: 20%;
    align-items: flex-end;
  }
`;

export { Container, Image, Information, Actions };
