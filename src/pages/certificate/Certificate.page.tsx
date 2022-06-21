import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { MdFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { GET_CERTIFICATE_BY_ID } from '../../common/graphql';
import { Certificate, CertificateByIDVariables } from '../../common/interface';
import { Container, Information, InformationContainer, InformationTop, PrincipalImage } from './Certificate.page.style';

const CertificatePage = () => {
  const { certificateID: id } = useParams();
  const [certificate, setCertificate] = useState<Certificate>({} as Certificate);
  const { data } = useQuery<any, CertificateByIDVariables>(GET_CERTIFICATE_BY_ID, { variables: { id: `${id || 0}` } });

  const createObject = () => {
    if (data) {
      setCertificate({ ...data.certificate.data.attributes, company: data.certificate.data.attributes.company.data.attributes });
    }
  };

  useEffect(() => {
    createObject();
  }, [data]);

  return (
    <Container>
      <PrincipalImage>{certificate.image && <img src={certificate.image} alt={certificate.name} />}</PrincipalImage>
      <Information>
        <InformationTop>
          <InformationContainer>
            {certificate.company && certificate.company.icon && <img src={certificate.company!.icon} alt={`companyPicture-${certificate.name}`} />}
            <a href={certificate.company ? certificate.company.link : ''} target="_blank" rel="noopener noreferrer">
              {certificate.company ? certificate.company.name : ''}
            </a>
          </InformationContainer>
          <InformationContainer>
            {!!certificate.outstanding && (
              <span>
                <MdFavorite />
              </span>
            )}
            {certificate.badgePicture && <img src={certificate.badgePicture} alt={`badgePicture-${certificate.name}`} />}
          </InformationContainer>
        </InformationTop>
        <h1>{certificate.name}</h1>
        <h6>{certificate.date}</h6>
        <a href={certificate.courseLink}>Link of the course</a>
        <p>{certificate.comment}</p>
      </Information>
    </Container>
  );
};

export { CertificatePage };
