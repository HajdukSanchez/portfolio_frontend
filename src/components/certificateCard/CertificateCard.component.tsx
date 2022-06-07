import React from 'react';

import { useNavigate } from 'react-router-dom';
import { RoutesNavigation } from '../../common/enums/navigation.enum';

import { Certificate } from '../../common/interface/certificate.interface';
import { Card, Description, Image, Information, Title } from './CertificateCard.component.styles';

const CertificateCard = ({ image, name, comment, uid }: Certificate) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${RoutesNavigation.Certificate}/${uid}`);
  };

  return (
    <Card onClick={handleNavigation}>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <Information>
        <Title>{name}</Title>
        <Description>{comment}</Description>
      </Information>
    </Card>
  );
};

export { CertificateCard };
