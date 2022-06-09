import React, { ReactNode } from 'react';

import { ButtonType } from '../../common/interface/';
import { ButtonContainer } from './Button.component.styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
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
