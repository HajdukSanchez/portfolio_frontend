import React, { useContext } from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { Button } from '../';
import { AppContext } from '../../context/AppContext';
import { RoutesNavigation } from '../../common/enums/navigation.enum';
import { Project, Tag } from '../../common/interface/projects.interface';
import { ButtonContainer, Card, Image, Information, Tags } from './ProjectCard.component.styles';

const ProjectCard = ({ cover, tags, name, shortDescription, uid }: Project) => {
  const { showMenu } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${RoutesNavigation.Project}/${uid}`);
  };

  return (
    <Card>
      <Image>
        <img src={cover} alt={name} />
      </Image>
      <Tags>{tags && tags?.map((tag: Tag, index: number) => <span key={`${index}-${tag.name}`}>#{name}</span>)}</Tags>
      <Information>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </Information>
      <ButtonContainer isVisible={!showMenu}>
        <Button text="View case study" onClick={handleNavigation} type={'link'} icon={<BsArrowRight />} />
      </ButtonContainer>
    </Card>
  );
};

export { ProjectCard };
