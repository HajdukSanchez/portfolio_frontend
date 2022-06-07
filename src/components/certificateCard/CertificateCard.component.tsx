import React from 'react';

import { Certificate } from '../../common/interface/certificate.interface';
import { Card, Description, Image, Information, Title } from './CertificateCard.component.styles';

const CertificateCard = ({ image, name, comment }: Certificate) => {
  return (
    <Card>
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
