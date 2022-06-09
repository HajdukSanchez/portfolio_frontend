import React from 'react';

import { Link } from 'react-router-dom';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import { getImageURL } from '../../helpers';
import { Project } from '../../common/interface';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { Actions, Container, Image, Information } from './ProjectBookmark.component.style';

interface ProjectBookmarkProps {
  project: Project;
}

const ProjectBookmark = ({ project: { id, cover, name, shortDescription, githubUrl } }: ProjectBookmarkProps) => {
  return (
    <Container>
      <Image>
        <img src={getImageURL(cover.data.attributes.url)} alt={name} />
      </Image>
      <Information>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </Information>
      <Actions>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <Link to={`${RoutesNavigation.Project}/${id}`}>
          <BsBoxArrowUpRight />
        </Link>
      </Actions>
    </Container>
  );
};

export { ProjectBookmark };
