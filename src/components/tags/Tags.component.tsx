import React from 'react';

import { Tag } from '../../common/interface';
import { TagsContainer } from './Tags.component.styles';

interface TagsProps {
  tags?: Tag[];
}

const Tags = ({ tags = [] }: TagsProps) => {
  return <TagsContainer>{tags && tags?.map((tag: Tag, index: number) => <span key={`${index}-${tag.name}`}>#{tag.name}</span>)}</TagsContainer>;
};

export { Tags };
