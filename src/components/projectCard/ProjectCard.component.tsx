import React, { useContext } from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Button } from '../';
import { AppContext } from '../../context/AppContext';
import { getImageURL } from '../../helpers/image.helper';
import { useNavigationPages } from '../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { Project, Tag } from '../../common/interface/projects.interface';
import { ButtonContainer, Card, Image, Information, Tags } from './ProjectCard.component.styles';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project: { cover, tags, name, shortDescription, id } }: ProjectCardProps) => {
  const { showMenu } = useContext(AppContext);
  const { makeNavigation } = useNavigationPages();

  return (
    <Card>
      <Image>
        <img src={getImageURL(cover.data.attributes.url)} alt={name} />
      </Image>
      <Tags>{tags && tags?.map((tag: Tag, index: number) => <span key={`${index}-${tag.name}`}>#{name}</span>)}</Tags>
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
