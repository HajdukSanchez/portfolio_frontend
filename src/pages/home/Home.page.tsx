import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { HomePageSectionsData } from './home.page.interface';
import { HOME_PAGE } from '../../common/graphql/homePage.query';
import { HomeSection } from './sections/homeSection/Home.section';
import { Container, TransparentContainer } from './Home.page.styles';
import { ProjectsSection } from './sections/projectsSection/Projects.section';
import { CertificatesSection } from './sections/certificatesSection/Certificates.section';
import { TechnologiesSection } from './sections/technologiesSection/Technologies.section';

const HomePage = () => {
  const [information, setInformation] = useState<HomePageSectionsData>({} as HomePageSectionsData);
  const { data } = useQuery(HOME_PAGE);

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      const homeData: HomePageSectionsData = data.homePage.data.attributes;
      setInformation(homeData);
    }
  };

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
