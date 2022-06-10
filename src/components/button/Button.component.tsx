import React, { ReactNode } from 'react';

import { ButtonType } from '../../common/interface/';
import { ButtonContainer } from './Button.component.styles';

/**
 * Data model for the props of the component
 *
 * @interface ButtonProps
 */
interface ButtonProps {
  /**
   * Text of the button
   *
   * @type {string}
   * @memberof ButtonProps
   */
  text: string;
  /**
   * Function to be called when the button is clicked
   *
   * @memberof ButtonProps
   */
  onClick: () => void;
  /**
   * Icon to show in the button
   *
   * @type {ReactNode}
   * @memberof ButtonProps
   */
  icon?: ReactNode;
  /**
   * Type of the button
   *
   * @type {ButtonType}
   * @memberof ButtonProps
   */
  type?: ButtonType;
}

const Button = ({ text, type = 'normal', icon = null, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} type={type} withIcon={icon ? true : false}>
      <span>{text}</span>
      {icon ?? null}
    </ButtonContainer>
  );
};

export { Button };
