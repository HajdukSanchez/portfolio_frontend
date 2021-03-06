import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { TechnologyImage } from '../../../../components';
import { TechnologySectionProps } from '../../home.page.interface';
import { Section, TechnologiesList, Title } from './Technologies.section.styles';
import { GET_TOP_TECHNOLOGIES } from '../../../../common/graphql/technology.query';
import { Technology, TopTechnologiesVariables } from '../../../../common/interface/technology.interface';

const TechnologiesSection = ({ title }: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const { data } = useQuery<any, TopTechnologiesVariables>(GET_TOP_TECHNOLOGIES, { variables: { limit: 4, outstanding: true } });

	const createObject = () => {
    if (data) {
      setTechnologies([]); // Reset technologies
      data.technologies.data.map(({ id, attributes }: any) => {
        const newTechnology: Technology = {
          id: id,
          name: attributes.name,
          image: attributes.picture,
          primaryColor: attributes.primaryColor,
          secondaryColor: attributes.secondaryColor,
        };
        setTechnologies((prevState) => [...prevState, newTechnology]);
      });
    }
  };

  useEffect(() => {
    createObject();
  }, [data]);

  return (
    <Section>
      <Title>{title}</Title>
      <TechnologiesList>
        {technologies.map((item: Technology, index: number) => (
          <TechnologyImage technology={item} key={`${index}-${item.id}`} />
        ))}
      </TechnologiesList>
    </Section>
  );
};

export { TechnologiesSection };
