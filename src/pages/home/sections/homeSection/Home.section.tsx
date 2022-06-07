import React, { useContext } from 'react';

import { HiDownload } from 'react-icons/hi';

import { Arrow, Button } from '../../../../components';
import { AppContext } from '../../../../context/AppContext';
import { HomeSectionProps } from '../../home.page.interface';
import { ButtonContainer, Description, Section, Title } from './Home.section.styles';

const HomeSection = ({ description }: HomeSectionProps) => {
  const { showMenu } = useContext(AppContext);
  const {
    user: { username, profession, cv },
  } = useContext(AppContext);

  // Open in new tab the cv
  const handleCV = () => {
    window.open(cv, '_blank');
  };

  return (
    <Section isVisible={!showMenu}>
      <Title>
        {username}, {profession}
      </Title>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button text="See my work" onClick={() => null} type={'active'} />
        <Button text="Download CV" onClick={handleCV} icon={<HiDownload />} />
      </ButtonContainer>
      <Arrow />
    </Section>
  );
};

export { HomeSection };
