import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoutesNavigation } from '../common/enums/navigation.enum';

import { Layout } from '../components';
import { AboutMePage, CertificatePage, CertificatesPage, HomePage, ProjectPage, ProjectsPage } from '../pages';

const Navigation = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutesNavigation.Home} element={<HomePage />} />
          <Route path={RoutesNavigation.AboutMe} element={<AboutMePage />} />
          <Route path={RoutesNavigation.Projects} element={<ProjectsPage />} />
          <Route path={`${RoutesNavigation.Project}/:id`} element={<ProjectPage />} />
          <Route path={RoutesNavigation.Certificates} element={<CertificatesPage />} />
          <Route path={`${RoutesNavigation.Certificate}/:id`} element={<CertificatePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export { Navigation };
