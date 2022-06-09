import React from 'react';

import { getImageURL } from '../../helpers';
import { Technology } from '../../common/interface';
import { Image, TechnologyContainer, Text } from './TechnologyImage.component.styles';

interface TechnologyImageProps {
  technology: Technology;
}

const TechnologyImage = ({ technology: { image, name, primaryColor } }: TechnologyImageProps) => {
  return (
    <TechnologyContainer>
      <Image>
        <img src={getImageURL(image.data.attributes.url)} alt={name} />
      </Image>
      <Text style={{ color: primaryColor }}>{name.toLocaleUpperCase()}</Text>
    </TechnologyContainer>
  );
};

export { TechnologyImage };
