import { ReactNode } from 'react';

export interface NavigatorCardProps {
  cardId: string;
  children: ReactNode | ReactNode[];
  minHeight?: number | string;
}

export enum Update {
  Up,
  Down,
  NoChange,
}

export interface FieldWithUpdateInfo<T> {
  value: T;
  update: Update;
}
