import React from 'react';

import { Link } from 'react-router-dom';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

import { Project } from '../../common/interface/projects.interface';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { Actions, Container, Image, Information } from './ProjectBookmark.component.style';

const ProjectBookmark = ({ uid, cover, name, shortDescription, githubUrl }: Project) => {
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
        <Link to={`${RoutesNavigation.Project}/${uid}`}>
          <BsBoxArrowUpRight />
        </Link>
      </Actions>
    </Container>
  );
};

export { ProjectBookmark };
