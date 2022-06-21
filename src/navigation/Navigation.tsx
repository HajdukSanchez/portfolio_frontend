import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from '../components';
import { RoutesNavigation } from '../common/enums/navigation.enum';
import { AboutMePage, CertificatePage, CertificatesPage, HomePage, ProjectPage, ProjectsPage } from '../pages';

const Navigation = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutesNavigation.Home} element={<HomePage />} />
          <Route path={RoutesNavigation.AboutMe} element={<AboutMePage />} />
          <Route path={RoutesNavigation.Projects} element={<ProjectsPage />} />
          <Route path={`${RoutesNavigation.Project}/:projectID`} element={<ProjectPage />} />
          <Route path={RoutesNavigation.Certificates} element={<CertificatesPage />} />
          <Route path={`${RoutesNavigation.Certificate}/:certificateID`} element={<CertificatePage />} />
          <Route path="*" element={<Navigate to={RoutesNavigation.Home} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export { Navigation };
