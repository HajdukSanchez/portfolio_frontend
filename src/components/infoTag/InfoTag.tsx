import React, { ReactNode } from 'react';

import { Tag } from './InfoTag.styles';

/**
 * Data model for the props of the component
 *
 * @interface InfoTagProps
 */
interface InfoTagProps {
  /**
   * Title of the tag
   *
   * @type {string}
   * @memberof InfoTagProps
   */
  title: string;
  /**
   * Icon to show in the tag
   *
   * @type {ReactNode}
   * @memberof InfoTagProps
   */
  icon: ReactNode;
  /**
   * Function to be called when the tag is clicked
   *
   * @memberof InfoTagProps
   */
  onClik?: () => void;
}

const InfoTag = ({ title, icon, onClik }: InfoTagProps) => {
  return (
    <Tag onClick={onClik} hasOnClick={onClik ? true : false}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </Tag>
  );
};

export { InfoTag };
