import React, { useContext, useEffect, useState } from 'react';

import { FaStar } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { MdPageview } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';

import { navigateOutside } from '../../helpers';
import { Button, Tags } from '../../components';
import { AppContext } from '../../context/AppContext';
import { GET_PROJECT_BY_ID } from '../../common/graphql';
import { Technology, Project, ProjectByIDVariables } from '../../common/interface';
import { ButtonContainer, Container, Description, Image, Profile, Technologies, TechnologyItem } from './Project.page.style';

const ProjectPage = () => {
  const { projectID: id } = useParams();
  const [project, setProject] = useState<Project>({} as Project);
  const {
    user: { picture, name: userName },
  } = useContext(AppContext);
  const { data } = useQuery<any, ProjectByIDVariables>(GET_PROJECT_BY_ID, {
    variables: {
      id: id?.toString() || '',
    },
  });

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    console.log({ data });
    if (data) {
      setProject({
        ...data.project.data.attributes,
        tags: data.project.data.attributes.tags.data.map((tag: any) => tag.attributes),
        technologies: data.project.data.attributes.technologies.data.map((tech: any) => tech.attributes),
      });
    }
  };

  return (
    <Container>
      <Image>
        {project.cover && <img src={project.cover} alt={project.name} />}
        {!!project.outstanding && (
          <span>
            <FaStar />
          </span>
        )}
      </Image>
      <Profile>
        {picture && <img src={picture} alt={userName} />}
        <div>
          <h3>{userName}</h3>
          <h5>{project.date}</h5>
        </div>
      </Profile>
      <h1>{project.name}</h1>
      <Tags tags={project.tags} />
      <Technologies>
        {project.technologies?.map((technology: Technology, index: number) => (
          <TechnologyItem key={`${index}-${technology.id}`} primaryColor={technology.primaryColor} secondaryColor={technology.secondaryColor}>
            {technology.name.toLocaleUpperCase()}
          </TechnologyItem>
        ))}
      </Technologies>
      <Description>
        <ReactMarkdown transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.REACT_APP_BASE_STRAPI_URL}${uri}`)}>
          {project.description ?? ''}
        </ReactMarkdown>
      </Description>
      <ButtonContainer>
        <Button text="See code" onClick={() => navigateOutside(project.githubUrl ?? '')} type={'active'} icon={<BsFileEarmarkCodeFill />} />
        {project.projectPageUrl && (
          <Button text="See project" onClick={() => navigateOutside(project.projectPageUrl ?? '')} type={'active'} icon={<MdPageview />} />
        )}
      </ButtonContainer>
    </Container>
  );
};

export { ProjectPage };
