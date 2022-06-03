import React from 'react';

import { Container } from './Home.page.styles';
import { HomeSection } from '../../components';
import { HomeSectionProps } from '../../common/interface/home.interface';

const HomePage = () => {
  const sectionData: HomeSectionProps[] = [
    {
      id: 1,
      title: 'Section 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
      image: 'https://html.com/wp-content/uploads/flamingo.jpg',
      buttonText: 'Go to section 1',
      buttonLink: '#',
    },
    {
      id: 2,
      title: 'Section 2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
      image: 'https://html.com/wp-content/uploads/flamingo.jpg',
      buttonText: 'Go to section 2',
      buttonLink: '#',
    },
  ];

  return (
    <Container>
      {sectionData.map((section: HomeSectionProps) => (
        <HomeSection {...section} key={section.id} />
      ))}
    </Container>
  );
};

export { HomePage };
