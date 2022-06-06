import React from 'react';

import { Certificate } from '../../common/interface/certificate.interface';
import { Card, Description, Image, Information, Title } from './CertificateCard.component.styles';

const CertificateCard = ({ image, title, description }: Certificate) => {
  return (
    <Card>
      <Image>
        <img src={image} alt={title} />
      </Image>
      <Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Information>
    </Card>
  );
};

export { CertificateCard };
