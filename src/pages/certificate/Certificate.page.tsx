import React from 'react';

import { useParams } from 'react-router-dom';

const CertificatePage = () => {
  const { uid } = useParams();

  return <div>Certificate {uid}</div>;
};

export { CertificatePage };
