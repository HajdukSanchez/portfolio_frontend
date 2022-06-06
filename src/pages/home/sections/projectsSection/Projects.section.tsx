import React from 'react';

import { HiOutlineViewGridAdd } from 'react-icons/hi';

import { Button, ProjectCard } from '../../../../components';
import { ProjectsColumn, ProjectsList, Section, Titles } from './Projects.section.styles';

const ProjectsSection = () => {
  return (
    <Section>
      <Titles>
        <h1>Work hard, learn &amp; code</h1>
        <h5>These projects are a little snack of my personal work. I love to learn about new technologies and create something with that</h5>
      </Titles>
      <ProjectsList>
        <ProjectsColumn>
          <ProjectCard />
          <ProjectCard />
        </ProjectsColumn>
        <ProjectsColumn>
          <ProjectCard />
          <ProjectCard />
        </ProjectsColumn>
      </ProjectsList>
      <Button text="View more" onClick={() => null} type={'more'} icon={<HiOutlineViewGridAdd />} />
    </Section>
  );
};

export { ProjectsSection };
