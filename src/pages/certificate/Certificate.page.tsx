import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { MdFavorite } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { getImageURL } from '../../helpers/image.helper';
import { GET_CERTIFICATE_BY_ID } from '../../common/graphql/certificate.query';
import { Certificate, CertificateByIDVariables } from '../../common/interface/certificate.interface';
import { Container, Information, InformationContainer, InformationTop, PrincipalImage } from './Certificate.page.style';

const CertificatePage = () => {
  const [certificate, setCertificate] = useState<Certificate>({} as Certificate);
  const { id } = useParams();
  const { data } = useQuery<any, CertificateByIDVariables>(GET_CERTIFICATE_BY_ID, { variables: { id: id!.toString() ?? 0 } });

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      setCertificate({ ...data.certificate.data.attributes, company: data.certificate.data.attributes.company.data.attributes });
    }
  };

  return (
    <Container>
      <PrincipalImage>{certificate.image && <img src={getImageURL(certificate.image.data.attributes.url)} alt={certificate.name} />}</PrincipalImage>
      <Information>
        <InformationTop>
          <InformationContainer>
            {certificate.company?.icon && (
              <img src={getImageURL(certificate.company!.icon.data.attributes.url)} alt={`companyPicture-${certificate.name}`} />
            )}
            <a href={certificate.company?.link} target="_blank" rel="noopener noreferrer">
              {certificate.company?.name}
            </a>
          </InformationContainer>
          <InformationContainer>
            {certificate.outstanding && (
              <span>
                <MdFavorite />
              </span>
            )}
            {certificate.badgePicture && (
              <img src={getImageURL(certificate.badgePicture!.data.attributes.url)} alt={`badgePicture-${certificate.name}`} />
            )}
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
