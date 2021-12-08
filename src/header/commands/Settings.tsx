import React, { useContext } from 'react';
import { ICommandBarItemProps } from '@fluentui/react';
import { IButtonProps } from '@fluentui/react';
import { NavigatorCommandBar } from '../NavigatorCommandBar';
import { AppContext } from '../../app/AppContext';
import { resetLayoutAction, setUpdateIntervalAction } from '../../app/actions';
import {
  resetLayoutInLocalStore,
  saveLayoutToLocalStore,
} from '../../app/layout/localStore';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const Settings: React.FunctionComponent = () => {
  const [{ windowLayout }, dispatch] = useContext(AppContext);

  const onResetLayout = () => {
    resetLayoutInLocalStore().then(() => dispatch(resetLayoutAction()));
  };

  const onSaveLayout = () => {
    if (windowLayout) {
      saveLayoutToLocalStore(windowLayout).then(() => {});
    }
  };

  const onChangeInterval = (interval: number) => {
    dispatch(setUpdateIntervalAction(interval));
  };

  const items: ICommandBarItemProps[] = [
    {
      key: 'saveLayout',
      text: 'Save Layout',
      iconProps: { iconName: 'Save' },
      onClick: onSaveLayout,
    },
    {
      key: 'resetLayout',
      text: 'Reset Layout',
      iconProps: { iconName: 'ViewDashboard' },
      onClick: onResetLayout,
    },
    {
      key: 'setUpdateInterval',
      text: 'Update Interval',
      iconProps: { iconName: 'Timer' },
      subMenuProps: {
        items: [
          {
            key: '60_000',
            text: '1/Minunte',
            onClick: () => onChangeInterval(60_000),
          },
          {
            key: '6_000',
            text: '10/Minute',
            onClick: () => onChangeInterval(6_000),
          },
          {
            key: '1_000',
            text: '1/Second',
            onClick: () => onChangeInterval(1_000),
          },
          {
            key: '100',
            text: '10/Second',
            onClick: () => onChangeInterval(100),
          },
        ],
      },
    },
  ];

  return (
    <NavigatorCommandBar items={items} overflowButtonProps={overflowProps} />
  );
};
