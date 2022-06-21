import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { CertificateCard } from '../../components';
import { Certificate } from '../../common/interface';
import { TransparentContainer } from '../home/Home.page.styles';
import { CertificatesPageData } from './Certificates.page.interface';
import { GET_ALL_CERTIFICATES, CERTIFICATES_PAGE } from '../../common/graphql';
import { CertificatesContainer, Container, Description, Title } from './Certificates.page.styles';

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [information, setInformation] = useState<CertificatesPageData>({} as CertificatesPageData);
  const { data } = useQuery(GET_ALL_CERTIFICATES);
  const { data: info } = useQuery(CERTIFICATES_PAGE);

  useEffect(() => {
    createObject();
  }, [data]);

  useEffect(() => {
    getPageData();
  }, [info]);

  const getPageData = () => {
    if (info) {
      const pageData: CertificatesPageData = info.certificatesPage.data.attributes.header;
      setInformation(pageData);
    }
  };

  const createObject = () => {
    if (data) {
      setCertificates([]); // Reset certificates
      data.certificates.data.map(({ attributes, id }: any) => {
        const newCertificate: Certificate = {
          id: id,
          name: attributes.name,
          date: attributes.date,
          image: attributes.image,
          badgePicture: attributes.badgePicture,
        };
        setCertificates((prevState) => [...prevState, newCertificate]);
      });
    }
  };

  return (
    <Container>
      <Title>{information.title}</Title>
      <Description>{information.description}</Description>
      <CertificatesContainer>
        {certificates.map((certificate: Certificate, index: number) => (
          <CertificateCard certificate={certificate} key={`${index}-${certificate.id}`} />
        ))}
      </CertificatesContainer>
      <TransparentContainer />
    </Container>
  );
};

export { CertificatesPage };
