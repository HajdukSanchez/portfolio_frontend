import React, { useContext } from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Button } from '../';
import { AppContext } from '../../context/AppContext';
import { Project, Tag } from '../../common/interface/projects.interface';
import { ButtonContainer, Card, Image, Information, Tags } from './ProjectCard.component.styles';

const ProjectCard = ({ cover, tags, name, shortDescription, uid }: Project) => {
  const { showMenu } = useContext(AppContext);

  return (
    <Card>
      <Image>
        <img src={cover} alt={name} />
      </Image>
      <Tags>
        {tags.map((tag: Tag, index: number) => (
          <span key={`${index}-${tag.name}`}>#{name}</span>
        ))}
      </Tags>
      <Information>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </Information>
      <ButtonContainer isVisible={!showMenu}>
        <Button text="View case study" onClick={() => null} type={'link'} icon={<BsArrowRight />} />
      </ButtonContainer>
    </Card>
  );
};

export { ProjectCard };
