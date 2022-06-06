import React, { useContext } from 'react';

import { HiDownload } from 'react-icons/hi';

import { Arrow, Button } from '../../../../components';
import { AppContext } from '../../../../context/AppContext';
import { ButtonContainer, Description, Section, Title } from './Home.section.styles';

const HomeSection = () => {
  const { showMenu } = useContext(AppContext);

  return (
    <Section isVisible={!showMenu}>
      <Title>Jozek Hajduk, Front-end and Mobile Developer</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, beatae iusto id iure commodi repellendus.</Description>
      <ButtonContainer>
        <Button text="See my work" onClick={() => null} type={'active'}/>
        <Button text="Download CV" onClick={() => null} icon={<HiDownload />} />
      </ButtonContainer>
      <Arrow />
    </Section>
  );
};

export { HomeSection };
