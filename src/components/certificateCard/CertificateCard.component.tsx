import React from 'react';

import { RoutesNavigation } from '../../common/enums/navigation.enum';

import { getImageURL } from '../../helpers/image.helper';
import { useNavigationPages } from '../../hooks/useNavigationPages';
import { Certificate } from '../../common/interface/certificate.interface';
import { Badge, Card, Image, Information, Title } from './CertificateCard.component.styles';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate: { image, name, id, badgePicture, date } }: CertificateCardProps) => {
  const { makeNavigation } = useNavigationPages();

  return (
    <Card onClick={() => makeNavigation(`${RoutesNavigation.Certificate}/${id}`)}>
      <Badge>
        <img src={getImageURL(badgePicture!.data.attributes.url)} alt={`badgePicture-${name}`} />
      </Badge>
      <Image>
        <img src={getImageURL(image.data.attributes.url)} alt={name} />
      </Image>
      <Information>
        {date && <h5>{date}</h5>}
        <Title>{name}</Title>
      </Information>
    </Card>
  );
};

export { CertificateCard };
