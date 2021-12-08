import React, { useContext } from 'react';
import { ICommandBarItemProps } from '@fluentui/react';
import { IButtonProps } from '@fluentui/react';
import { NavigatorCommandBar } from '../NavigatorCommandBar';
import { AppContext } from '../../app/AppContext';
import { changeViewAction } from '../../app/actions';
import { ViewLayout } from '../../app/types';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const PositionMonitor: React.FunctionComponent = () => {
  const [, dispatch] = useContext(AppContext);

  const onFocusClick = () => {
    // dispatch(changeViewAction(ViewLayout.PositionMonitor));
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

const items: ICommandBarItemProps[] = [
  {
    key: 'selectPeriod',
    text: 'Period',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Timeline' },
    subMenuProps: {
      items: [
        {
          key: 'quarter',
          text: 'Quarter',
        },
        {
          key: 'hour',
          text: 'Hour',
        },
      ],
    },
  },
  {
    key: 'selectTso',
    text: 'TSOs',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'AreaChart' },
    subMenuProps: {
      items: [
        {
          key: '50hzt',
          text: '50HZT',
        },
        {
          key: 'elia',
          text: 'ELLIA',
        },
        {
          key: 'n04',
          text: 'NO4',
        },
        {
          key: 'ttg',
          text: 'TTG',
          iconProps: { iconName: 'CheckMark' },
        },
        {
          key: 'sdg',
          text: 'SDG',
        },
      ],
    },
  },
  {
    key: 'selectPorfolios',
    text: 'Portfolios',
    iconProps: { iconName: 'ProjectCollection' },
    subMenuProps: {
      items: [
        {
          key: 'likron001',
          text: 'LIKR_001',
        },
        {
          key: 'likron002',
          text: 'LIKR_002',
          iconProps: { iconName: 'CheckMark' },
        },
        {
          key: 'likron003',
          text: 'LIKR_003',
          iconProps: { iconName: 'CheckMark' },
        },
        {
          key: 'likron004',
          text: 'LIKR_004',
        },
      ],
    },
  },
  {
    key: 'selectPeriod',
    text: 'Period',
    iconProps: { iconName: 'Timeline' },
    subMenuProps: {
      items: [
        {
          key: 'all',
          text: 'All',
        },
        {
          key: 'today',
          text: 'Today',
          iconProps: { iconName: 'CheckMark' },
        },
        {
          key: 'tomorrow',
          text: 'Tomorrow',
        },
        {
          key: 'yesterday',
          text: 'Yesterday',
        },
      ],
    },
  },
  {
    key: 'idSeries',
    text: 'ID Series',
    iconProps: { iconName: 'BarChartVerticalFilterSolid' },
    subMenuProps: {
      items: [
        {
          key: '1',
          text: '1',
        },
        {
          key: '2',
          text: '2',
        },
        {
          key: '3',
          text: '3',
        },
        {
          key: '4',
          text: '4',
        },
        {
          key: '5',
          text: '5',
          iconProps: { iconName: 'CheckMark' },
        },
      ],
    },
  },
  {
    key: 'step',
    text: 'Step',
    iconProps: { iconName: 'Step' },
    subMenuProps: {
      items: [
        {
          key: '1',
          text: '1',
        },
        {
          key: '2',
          text: '2',
        },
        {
          key: '3',
          text: '3',
        },
        {
          key: '4',
          text: '4',
        },
        {
          key: '5',
          text: '5',
        },
        {
          key: '6',
          text: '6',
        },
        {
          key: '8',
          text: '8',
          iconProps: { iconName: 'CheckMark' },
        },
        {
          key: '10',
          text: '10',
        },
        {
          key: '12',
          text: '12',
        },
        {
          key: '16',
          text: '16',
        },
        {
          key: '24',
          text: '24',
        },
        {
          key: '32',
          text: '32',
        },
      ],
    },
  },
  // {
  //   key: 'share',
  //   text: 'Share',
  //   iconProps: { iconName: 'Share' },
  //   onClick: () => console.log('Share'),
  // },
  // {
  //   key: 'download',
  //   text: 'Download',
  //   iconProps: { iconName: 'Download' },
  //   onClick: () => console.log('Download'),
  // },
];
