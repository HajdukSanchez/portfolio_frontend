import React, { useContext } from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { Button } from '../';
import { AppContext } from '../../context/AppContext';
import { ButtonContainer, Card, Image, Information, Tags } from './ProjectCard.component.styles';

const ProjectCard = () => {
  const { showMenu } = useContext(AppContext);

  return (
    <Card>
      <Image>
        <img src="https://source.unsplash.com/random/800x600" alt="" />
      </Image>
      <Tags>
        <span>#chao</span>
      </Tags>
      <Information>
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores totam, temporibus repudiandae</p>
      </Information>
      <ButtonContainer isVisible={!showMenu}>
        <Button text="View case study" onClick={() => null} type={'link'} icon={<BsArrowRight />} />
      </ButtonContainer>
    </Card>
  );
};

export { ProjectCard };
