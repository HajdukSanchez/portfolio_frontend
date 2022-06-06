import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

interface ArrowProps {
  width?: string;
  height?: string;
  color?: string;
  onClick?: () => void;
}

const Arrow = ({ height, width, color, onClick }: ArrowProps) => <BsArrowRight style={{ width, height, color }} onClick={onClick} />;

export { Arrow };
