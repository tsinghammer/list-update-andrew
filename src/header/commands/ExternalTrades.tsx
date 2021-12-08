import React, { useContext } from 'react';
import { ICommandBarItemProps } from '@fluentui/react';
import { IButtonProps } from '@fluentui/react';
import { NavigatorCommandBar } from '../NavigatorCommandBar';
import { AppContext } from '../../app/AppContext';
import { changeViewAction } from '../../app/actions';
import { ViewLayout } from '../../app/types';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const ExternalTrades: React.FunctionComponent = () => {
  const [, dispatch] = useContext(AppContext);

  const items: ICommandBarItemProps[] = [
    {
      key: 'deleteSelected',
      text: 'Delete Selected',
      iconProps: { iconName: 'Delete' },
    },
  ];

  const onFocusClick = () => {
    dispatch(changeViewAction(ViewLayout.ExternalTrades));
  };

  const onOverviewClick = () => {
    dispatch(changeViewAction(ViewLayout.Overview));
  };

  const farItems: ICommandBarItemProps[] = [
    {
      key: 'focus',
      text: 'Focus',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Focus',
      iconOnly: true,
      iconProps: { iconName: 'Focus' },
      onClick: onFocusClick,
    },
    {
      key: 'overview',
      text: 'Overview',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Overview',
      iconOnly: true,
      iconProps: { iconName: 'Tiles' },
      onClick: onOverviewClick,
    },
  ];

  return (
    <NavigatorCommandBar
      items={items}
      overflowButtonProps={overflowProps}
      farItems={farItems}
    />
  );
};
