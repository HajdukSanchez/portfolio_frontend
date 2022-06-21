import React from 'react';

import { RoutesNavigation } from '../../common/enums/navigation.enum';

import { Certificate } from '../../common/interface';
import { useNavigationPages } from '../../hooks/useNavigationPages';
import { Badge, Card, Image, Information, Title } from './CertificateCard.component.styles';

/**
 * Data model for the props of the component
 *
 * @interface CertificateCardProps
 */
interface CertificateCardProps {
  /**
   * Certificate to show in the card
   *
   * @type {Certificate}
   * @memberof CertificateCardProps
   */
  certificate: Certificate;
}

const CertificateCard = ({ certificate: { image, name, id, badgePicture, date } }: CertificateCardProps) => {
  const { makeNavigation } = useNavigationPages();

  return (
    <Card onClick={() => makeNavigation(`${RoutesNavigation.Certificate}/${id}`)}>
      <Badge>
        <img src={badgePicture} alt={`badgePicture-${name}`} />
      </Badge>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <Information>
        {date && <h5>{date}</h5>}
        <Title title={name}>{name}</Title>
      </Information>
    </Card>
  );
};

export { CertificateCard };
