import React, { useContext } from 'react';

import { HiDownload } from 'react-icons/hi';

import { Arrow, Button } from '../../../../components';
import { AppContext } from '../../../../context/AppContext';
import { navigateOutside } from '../../../../helpers/navigation.helper';
import { HomeSectionProps } from '../../home.page.interface';
import { ButtonContainer, Description, Section, Title } from './Home.section.styles';

const HomeSection = ({ description }: HomeSectionProps) => {
  const { showMenu } = useContext(AppContext);
  const {
    user: { username, profession, cv },
  } = useContext(AppContext);

  return (
    <Section isVisible={!showMenu}>
      <Title>
        {username}, {profession}
      </Title>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button text="See my work" onClick={() => null} type={'active'} />
        <Button text="Download CV" onClick={() => navigateOutside(cv ?? '')} icon={<HiDownload />} />
      </ButtonContainer>
      <Arrow />
    </Section>
  );
};

export { HomeSection };
