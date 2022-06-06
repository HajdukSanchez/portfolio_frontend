import React from 'react';

import { TechnologyImage } from '../../../../components';
import { Technology } from '../../../../common/interface/technology.interface';
import { Section, TechnologiesList, Title } from './Technologies.section.styles';

const TechnologiesSection = () => {
  const data: Technology[] = [
    {
      id: 1,
      name: 'CSS3',
      image: 'https://cdn-icons-png.flaticon.com/512/121/121537.png',
      primaryColor: 'red',
      secondaryColor: 'red',
    },
    {
      id: 2,
      name: 'CSS3',
      image: 'https://cdn-icons-png.flaticon.com/512/121/121537.png',
      primaryColor: 'red',
      secondaryColor: 'red',
    },
    {
      id: 3,
      name: 'CSS3',
      image: 'https://cdn-icons-png.flaticon.com/512/121/121537.png',
      primaryColor: 'red',
      secondaryColor: 'red',
    },
    {
      id: 1,
      name: 'CSS3',
      image: 'https://cdn-icons-png.flaticon.com/512/121/121537.png',
      primaryColor: 'red',
      secondaryColor: 'red',
    },
    {
      id: 2,
      name: 'CSS3',
      image: 'https://cdn-icons-png.flaticon.com/512/121/121537.png',
      primaryColor: 'red',
      secondaryColor: 'red',
    },
  ];

  return (
    <Section>
      <Title>Technologies I work with</Title>
      <TechnologiesList>
        {data.map((item: Technology) => (
          <TechnologyImage {...item} key={item.id} />
        ))}
      </TechnologiesList>
    </Section>
  );
};

export { TechnologiesSection };
