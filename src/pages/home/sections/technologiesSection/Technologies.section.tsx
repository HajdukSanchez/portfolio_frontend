import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { TechnologyImage } from '../../../../components';
import { TechnologySectionProps } from '../../home.page.interface';
import { Technology, TopTechnologiesVariables } from '../../../../common/interface/technology.interface';
import { Section, TechnologiesList, Title } from './Technologies.section.styles';
import { GET_TOP_TECHNOLOGIES } from '../../../../common/graphql/technology.query';

const TechnologiesSection = ({ title }: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const { data } = useQuery<any, TopTechnologiesVariables>(GET_TOP_TECHNOLOGIES, { variables: { limit: 3, outstanding: true } });

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      setTechnologies([]); // Reset technologies
      data.technologies.data.map(({ attributes }: any) => {
        const newTechnology: Technology = {
          uid: attributes.uid,
          name: attributes.name,
          primaryColor: attributes.primaryColor,
          secondaryColor: attributes.secondaryColor,
          image: `${process.env.REACT_APP_BASE_STRAPI_URL}${attributes.picture.data.attributes.url}`,
        };
        setTechnologies((prevState) => [...prevState, newTechnology]);
      });
    }
  };

  return (
    <Section>
      <Title>{title}</Title>
      <TechnologiesList>
        {technologies.map((item: Technology, index: number) => (
          <TechnologyImage {...item} key={`${index}-${item.uid}`} />
        ))}
      </TechnologiesList>
    </Section>
  );
};

export { TechnologiesSection };
