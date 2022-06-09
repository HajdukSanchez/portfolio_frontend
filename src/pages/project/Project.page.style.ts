import styled from 'styled-components';
import { globalStylesVariables, mediaQueries } from '../../common/style/styles';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem 8rem;
  background-color: ${globalStylesVariables.colors.secondary};

  & > h1 {
    text-transform: capitalize;
    font-size: ${globalStylesVariables.textSize.semiLarge};
    color: ${globalStylesVariables.textColors.primary};
  }

  @media ${mediaQueries.desktop} {
    padding: 0rem 10rem 8rem;
  }

  @media ${mediaQueries.desktopXL} {
    padding: 0rem 16rem 8rem;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  max-height: 25rem;
  border-radius: ${globalStylesVariables.borderRadius};
  margin-bottom: 5rem;

  & > span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: ${globalStylesVariables.textSize.large};
    color: ${globalStylesVariables.textColors.tertiary};
  }

  & > img {
    border-radius: inherit;
    object-fit: cover;

    @media ${mediaQueries.tablet} {
      max-height: 25rem;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 2rem;

  & > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > h3 {
      font-size: ${globalStylesVariables.textSize.small};
      color: ${globalStylesVariables.textColors.primary};
      padding-bottom: 0.3rem;
    }

    & > h5 {
      font-size: ${globalStylesVariables.textSize.extraSmall};
      color: ${globalStylesVariables.textColors.tertiary};
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const TechnologyItem = styled.h6<{ primaryColor: string; secondaryColor: string }>`
  margin: 0.5rem;
  padding: 1rem 2rem;
  border-radius: ${globalStylesVariables.borderRadius};
  background-image: ${(props) => `linear-gradient(to right, ${props.primaryColor}, ${props.secondaryColor})`};
  font-size: ${globalStylesVariables.textSize.extraSmall};

  &:first-child {
    margin-left: 0;
  }
`;

const Description = styled.div`
  margin: 4rem 0 6rem;
  width: 100%;
  font-size: ${globalStylesVariables.textSize.medium};
  color: ${globalStylesVariables.textColors.primary};
`;

const ButtonContainer = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 8rem;

  & > div:first-child {
    margin-bottom: 1rem;
  }

  @media ${mediaQueries.tablet} {
    width: 30%;
  }
`;

export { Container, Image, Profile, Technologies, Description, TechnologyItem, ButtonContainer };
