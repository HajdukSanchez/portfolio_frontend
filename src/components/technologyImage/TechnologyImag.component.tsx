import React from 'react';

import { Image, TechnologyContainer, Text } from './TechnologyImage.component.styles';
import { Technology } from '../../common/interface/technology.interface';

const TechnologyImage = ({ image, name, primaryColor }: Technology) => {
  return (
    <TechnologyContainer>
      <Image>
        <img src={`${image}`} alt={name} />
      </Image>
      <Text style={{ color: primaryColor }}>{name.toLocaleUpperCase()}</Text>
    </TechnologyContainer>
  );
};

export { TechnologyImage };
