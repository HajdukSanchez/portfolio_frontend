import React from 'react';

import { Technology } from '../../common/interface';
import { Image, TechnologyContainer, Text } from './TechnologyImage.component.styles';

/**
 * Data model for the props of the component
 *
 * @interface TechnologyImageProps
 */
interface TechnologyImageProps {
  /**
   * Technology to show in the image
   *
   * @type {Technology}
   * @memberof TechnologyImageProps
   */
  technology: Technology;
}

const TechnologyImage = ({ technology: { image, name, primaryColor } }: TechnologyImageProps) => {
  return (
    <TechnologyContainer>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <Text style={{ color: primaryColor }}>{name.toLocaleUpperCase()}</Text>
    </TechnologyContainer>
  );
};

export { TechnologyImage };
