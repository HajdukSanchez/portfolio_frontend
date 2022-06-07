import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Button, CertificateCard } from '../../../../components';
import { CertificateSectionProps } from '../../home.page.interface';
import { GET_TOP_CERTIFICATES } from '../../../../common/graphql/certificate.query';
import { CertificateCardList, Section, SubTitle, Title } from './Certificates.section.styles';
import { Certificate, TopCertificatesVariables } from '../../../../common/interface/certificate.interface';

const CertificatesSection = ({ title, subTitle }: CertificateSectionProps) => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const { data } = useQuery<any, TopCertificatesVariables>(GET_TOP_CERTIFICATES, { variables: { limit: 3, outstanding: true } });

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      setCertificates([]); // Reset certificates
      data.certificates.data.map(({ attributes }: any) => {
        const newCertificate: Certificate = {
          uid: attributes.uid,
          name: attributes.name,
          comment: attributes.comment,
          image: `${process.env.REACT_APP_BASE_STRAPI_URL}${attributes.image.data.attributes.url}`,
        };
        setCertificates((prevState) => [...prevState, newCertificate]);
      });
    }
  };

  return (
    <Section>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <CertificateCardList>
        {certificates.map((item: Certificate, index: number) => (
          <CertificateCard {...item} key={`${index}-${item.uid}`} />
        ))}
      </CertificateCardList>
      <Button text="View more" onClick={() => null} type={'more'} icon={<AiOutlinePlusCircle />} />
    </Section>
  );
};

export { CertificatesSection };
