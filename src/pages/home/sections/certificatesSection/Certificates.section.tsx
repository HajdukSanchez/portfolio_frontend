import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Button, CertificateCard } from '../../../../components';
import { CertificateSectionProps } from '../../home.page.interface';
import { useNavigationPages } from '../../../../hooks/useNavigationPages';
import { RoutesNavigation } from '../../../../common/enums/navigation.enum';
import { GET_TOP_CERTIFICATES } from '../../../../common/graphql/certificate.query';
import { CertificateCardList, Section, SubTitle, Title } from './Certificates.section.styles';
import { Certificate, TopCertificatesVariables } from '../../../../common/interface/certificate.interface';

const CertificatesSection = ({ title, subTitle }: CertificateSectionProps) => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const { data } = useQuery<any, TopCertificatesVariables>(GET_TOP_CERTIFICATES, { variables: { limit: 3, outstanding: true } });
  const { makeNavigation } = useNavigationPages();

  useEffect(() => {
    createObject();
  }, [data]);

  const createObject = () => {
    if (data) {
      setCertificates([]); // Reset certificates
      data.certificates.data.map(({ attributes, id }: any) => {
        const newCertificate: Certificate = {
          id: id,
          name: attributes.name,
          comment: attributes.comment,
          image: attributes.image,
          badgePicture: attributes.badgePicture,
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
          <CertificateCard certificate={item} key={`${index}-${item.id}`} />
        ))}
      </CertificateCardList>
      <Button text="View more" onClick={() => makeNavigation(RoutesNavigation.Certificates)} type={'more'} icon={<AiOutlinePlusCircle />} />
    </Section>
  );
};

export { CertificatesSection };
