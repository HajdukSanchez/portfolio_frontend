import React from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Button, CertificateCard } from '../../../../components';
import { Certificate } from '../../../../common/interface/certificate.interface';
import { CertificateCardList, Section, SubTitle, Title } from './Certificates.section.styles';

const CertificatesSection = () => {
  // TODO: Limit search only for the latest 3 projects
  const data: Certificate[] = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
  ];

  return (
    <Section>
      <SubTitle>Certificates</SubTitle>
      <Title>My highlight. Reflected my learning</Title>
      <CertificateCardList>
        {data.map((item: Certificate) => (
          <CertificateCard {...item} key={item.id} />
        ))}
      </CertificateCardList>
      <Button text="View more" onClick={() => null} type={'more'} icon={<AiOutlinePlusCircle />} />
    </Section>
  );
};

export { CertificatesSection };
