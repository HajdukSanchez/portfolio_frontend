import React, { useContext } from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Button, Tags } from '../';
import { Project } from '../../common/interface';
import { AppContext } from '../../context/AppContext';
import { useNavigationPages } from '../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { ButtonContainer, Card, Image, Information } from './ProjectCard.component.styles';

/**
 * Data model for the props of the component
 *
 * @interface ProjectCardProps
 */
interface ProjectCardProps {
  /**
   * Project to show in the card
   *
   * @type {Project}
   * @memberof ProjectCardProps
   */
  project: Project;
}

const ProjectCard = ({ project: { cover, tags, name, shortDescription, id } }: ProjectCardProps) => {
  const { showMenu } = useContext(AppContext);
  const { makeNavigation } = useNavigationPages();

  return (
    <Card>
      <Image>
        <img src={cover} alt={name} />
      </Image>
      <Tags tags={tags} />
      <Information>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </Information>
      <ButtonContainer isVisible={!showMenu}>
        <Button text="View case study" onClick={() => makeNavigation(`${RoutesNavigation.Project}/${id}`)} type={'link'} icon={<BsArrowRight />} />
      </ButtonContainer>
    </Card>
  );
};

export { ProjectCard };
