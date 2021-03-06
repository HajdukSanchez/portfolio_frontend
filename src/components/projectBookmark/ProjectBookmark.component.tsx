import React from 'react';

import { Link } from 'react-router-dom';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import { Project } from '../../common/interface';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { Actions, Container, Image, Information } from './ProjectBookmark.component.style';

/**
 * Data model to the props of the component
 *
 * @interface ProjectBookmarkProps
 */
interface ProjectBookmarkProps {
  /**
   * Project to show in the bookmark
   *
   * @type {Project}
   * @memberof ProjectBookmarkProps
   */
  project: Project;
}

const ProjectBookmark = ({ project: { id, cover, name, shortDescription, githubUrl } }: ProjectBookmarkProps) => {
  return (
    <Container>
      <Image>
        <img src={cover} alt={name} />
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
