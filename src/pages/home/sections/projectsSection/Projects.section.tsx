import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

import { Button, ProjectCard } from '../../../../components';
import { ProjectSectionProps } from '../../home.page.interface';
import { useNavigationPages } from '../../../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../../../common/enums/navigation.enum';
import { GET_TOP_PROJECTS } from '../../../../common/graphql/project.query';
import { ProjectsColumn, ProjectsList, Section, Titles } from './Projects.section.styles';
import { Project, Tag, TopProjectsVariables } from '../../../../common/interface/projects.interface';

/**
 * Data model for projects section
 *
 * @interface ProjectsState
 */
interface ProjectsState {
  /**
   * Projects in the first column
   *
   * @type {Project[]}
   * @memberof ProjectsState
   */
  columnOne: Project[];
  /**
   * Projects in the second column
   *
   * @type {Project[]}
   * @memberof ProjectsState
   */
  columnTwo: Project[];
}

const ProjectsSection = ({ title, subTitle }: ProjectSectionProps) => {
  const [projects, setProjects] = useState<ProjectsState>({ columnOne: [], columnTwo: [] });
  const { data } = useQuery<any, TopProjectsVariables>(GET_TOP_PROJECTS, { variables: { limit: 6, outstanding: true } });
  const { makeNavigation } = useNavigationPages();

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      setProjects({ columnOne: [], columnTwo: [] }); // Reset projects
      data.projects.data.map(({ attributes, id }: any, index: number) => {
        const tags: Tag[] = []; // Tags for the project
        attributes.tags.data.forEach((item: any) => {
          tags.push({
            name: item.attributes.name,
          });
        });

        const newProject: Project = {
          tags: tags,
          id: id,
          name: attributes.name,
          shortDescription: attributes.shortDescription,
          cover: attributes.cover,
        };

        // One project per column in each iteration
        if (index % 2 === 0) {
          projects.columnOne.push(newProject);
          setProjects({
            ...projects,
          });
        } else {
          projects.columnTwo.push(newProject);
          setProjects({
            ...projects,
          });
        }
      });
    }
  };

  return (
    <Section>
      <Titles>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
      </Titles>
      <ProjectsList>
        <ProjectsColumn>
          {projects.columnOne.length > 0 &&
            projects.columnOne.map((project: Project, index: number) => <ProjectCard key={`${index}-${project.id}`} project={project} />)}
        </ProjectsColumn>
        <ProjectsColumn>
          {projects.columnTwo.length > 0 &&
            projects.columnTwo.map((project: Project, index: number) => <ProjectCard key={`${index}-${project.id}`} project={project} />)}
        </ProjectsColumn>
      </ProjectsList>
      <Button text="View more" onClick={() => makeNavigation(RoutesNavigation.Projects)} type={'more'} icon={<HiOutlineViewGridAdd />} />
    </Section>
  );
};

export { ProjectsSection };
