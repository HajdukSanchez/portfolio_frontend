import React from 'react';

import { ButtonContainer } from './Button.component.styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <span>{text}</span>
    </ButtonContainer>
  );
};

export { Button };
