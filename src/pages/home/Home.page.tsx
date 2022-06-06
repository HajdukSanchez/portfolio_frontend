import React from 'react';

import { Container } from './Home.page.styles';
import { HomeSection } from './sections/homeSection/Home.section';
import { ProjectsSection } from './sections/projectsSection/Projects.section';
import { CertificatesSection } from './sections/certificatesSection/Certificates.section';
import { TechnologiesSection } from './sections/technologiesSection/Technologies.section';

const HomePage = () => {
  return (
    <Container>
      <HomeSection />
      <TechnologiesSection />
      <CertificatesSection />
      <ProjectsSection />
    </Container>
  );
};

export { HomePage };
