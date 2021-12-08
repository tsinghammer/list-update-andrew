import React, { ReactNode } from 'react';
import { OddCardArrangement } from './templates/OddCardArrangement';
import { EvenCardArrangement } from './templates/EvenCardArrangement';
import { OneCardArrangement } from './templates/OneCardArrangement';

interface Props {
  children: ReactNode | ReactNode[];
}

export const CardArrangement: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { children } = props;

  if (!Array.isArray(children) || children.length === 1) {
    return <OneCardArrangement>{children}</OneCardArrangement>;
  }

  if (children.length % 2 === 0) {
    return <EvenCardArrangement>{children}</EvenCardArrangement>;
  }

  return <OddCardArrangement>{children}</OddCardArrangement>;
};
