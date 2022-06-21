import React, { useContext, useEffect, useState } from 'react';

import { Timeline } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { RiGithubLine } from 'react-icons/ri';

import { monthDifference } from '../../helpers';
import { Project } from '../../common/interface';
import { PROJECTS_PAGE } from '../../common/graphql';
import { AppContext } from '../../context/AppContext';
import { GET_ALL_PROJECTS } from '../../common/graphql';
import { Button, ProjectBookmark } from '../../components';
import { ProjectsPageData } from './projects.page.interface';
import { TransparentContainer } from '../home/Home.page.styles';
import { Container, Description, TimeLineContainer, Title } from './Projects.page.styles';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [information, setInformation] = useState<ProjectsPageData>({} as ProjectsPageData);
  const { data } = useQuery(GET_ALL_PROJECTS);
  const { data: info } = useQuery(PROJECTS_PAGE);
  const {
    user: { gitHub },
  } = useContext(AppContext);

  const getPageData = () => {
    if (info) {
      const pageData: ProjectsPageData = info.projectsPage.data.attributes.header;
      setInformation(pageData);
    }
  };

  const createObject = () => {
    if (data) {
      setProjects([]); // Reset projects
      data.projects.data.map(({ attributes, id }: any) => {
        const newProject: Project = {
          id: id,
          name: attributes.name,
          date: attributes.date,
          githubUrl: attributes.githubUrl,
          shortDescription: attributes.shortDescription,
          cover: attributes.cover,
        };
        setProjects((prevState) => [...prevState, newProject]);
      });
    }
  };

  useEffect(() => {
    createObject();
  }, [data]);

  useEffect(() => {
    getPageData();
  }, [info]);

  const handleButtonClick = () => {
    window.open(gitHub, '_blank');
  };

  return (
    <Container>
      <Title>{information.title}</Title>
      <Description>{information.description}</Description>
      <Button text={information.buttonText} onClick={handleButtonClick} icon={<RiGithubLine />} type={'linkedIn'} />
      <TimeLineContainer>
        <Timeline active={projects.length} bulletSize={20} lineWidth={3} color={'cyan'} reverseActive>
          {projects.map((project: Project, index: number) => {
            const monthDiff: number = monthDifference(project.date!, new Date().toDateString());
            const monthDiffText: string = monthDiff < 1 ? 'This month' : `${monthDiff} months ago`;
            return (
              <Timeline.Item
                title={
                  <h6>
                    {project.date!}
                    <span> - {monthDiffText}</span>
                  </h6>
                }
                key={`${index}-${project.id}`}
                color={'cyan'}>
                <ProjectBookmark project={project} />
              </Timeline.Item>
            );
          })}
        </Timeline>
      </TimeLineContainer>
      <TransparentContainer />
    </Container>
  );
};

export { ProjectsPage };
