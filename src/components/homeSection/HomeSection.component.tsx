import React from 'react';

import { Image, Information, Section, Title } from './HomeSection.component.styles';
import { HomeSectionProps } from '../../common/interface/home.interface';
import { Button } from '../button/Button.component';

const HomeSection = ({ title, description, image, buttonLink, buttonText }: HomeSectionProps) => {
  const handleNavigation = () => {
    // TODO: Navogation with button link
  };

  return (
    <Section>
      <Title>{title}</Title>
      <Image>
        <img src={image} alt={title} />
      </Image>
      <Information>
        <p>{description}</p>
        <Button text={buttonText} onClick={handleNavigation} />
      </Information>
    </Section>
  );
};

export { HomeSection };
