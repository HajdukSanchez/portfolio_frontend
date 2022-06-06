import React, { ReactNode } from 'react';

import { ButtonContainer } from './Button.component.styles';
import { ButtonType } from '../../common/interface/button.interface';

interface ButtonProps {
  text: string;
  type?: ButtonType;
  icon?: ReactNode;
  onClick: () => void;
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
