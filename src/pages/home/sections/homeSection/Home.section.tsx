import React, { useContext } from 'react';

import { HiDownload } from 'react-icons/hi';

import { navigateOutside } from '../../../../helpers';
import { Arrow, Button } from '../../../../components';
import { AppContext } from '../../../../context/AppContext';
import { HomeSectionProps } from '../../home.page.interface';
import { useNavigationPages } from '../../../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../../../common/enums/navigation.enum';
import { ButtonContainer, Description, Section, Title } from './Home.section.styles';

const HomeSection = ({ description }: HomeSectionProps) => {
  const { showMenu } = useContext(AppContext);
  const { makeNavigation } = useNavigationPages();
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
        <Button text="See my work" onClick={() => makeNavigation(RoutesNavigation.Projects)} type={'active'} />
        <Button text="Download CV" onClick={() => navigateOutside(cv ?? '')} icon={<HiDownload />} />
      </ButtonContainer>
      <Arrow />
    </Section>
  );
};

export { HomeSection };
