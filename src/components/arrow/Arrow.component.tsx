import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

/**
 * Data model for the props of the component
 *
 * @interface ArrowProps
 */
interface ArrowProps {
  /**
   * Width of the arrow
   */
  width?: string;
  /**
   * Height of the arrow
   *
   * @type {string}
   * @memberof ArrowProps
   */
  height?: string;
  /**
   * Color of the arrow
   *
   * @type {string}
   * @memberof ArrowProps
   */
  color?: string;
  /**
   * Fuction to be called when the arrow is clicked
   *
   * @memberof ArrowProps
   */
  onClick?: () => void;
}

const Arrow = ({ height, width, color, onClick }: ArrowProps) => <BsArrowRight style={{ width, height, color }} onClick={onClick} />;

export { Arrow };
