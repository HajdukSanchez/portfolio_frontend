import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { HOME_PAGE } from '../../common/graphql';
import { HomePageSectionsData } from './home.page.interface';
import { Container, TransparentContainer } from './Home.page.styles';
import { HomeSection, ProjectsSection, CertificatesSection, TechnologiesSection } from './sections/';

const HomePage = () => {
  const [information, setInformation] = useState<HomePageSectionsData>({} as HomePageSectionsData);
  const { data } = useQuery(HOME_PAGE);

  const createObject = () => {
    if (data) {
      const homeData: HomePageSectionsData = data.homePage.data.attributes;
      setInformation(homeData);
    }
  };

  useEffect(() => {
    createObject();
  }, [data]);

  return (
    <Container>
      <HomeSection {...information.home} />
      <TechnologiesSection {...information.technologies} />
      <CertificatesSection {...information.certificates} />
      <ProjectsSection {...information.projects} />
      <TransparentContainer />
    </Container>
  );
};

export { HomePage };
