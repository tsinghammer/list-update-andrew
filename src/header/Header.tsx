import React from 'react';
import { TitleBar } from './TitleBar';
import { Menu } from './Menu';
import { useKeyboardControl } from '../app/layout/hooks';

export const Header: React.FunctionComponent = () => {
  useKeyboardControl();

  return (
    <div style={{ width: '100%' }}>
      <TitleBar />
      <Menu />
    </div>
  );
};
