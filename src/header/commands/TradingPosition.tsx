import React, { useContext } from 'react';
import { ICommandBarItemProps, SearchBox } from '@fluentui/react';
import { IButtonProps } from '@fluentui/react';
import { NavigatorCommandBar } from '../NavigatorCommandBar';
import { AppContext } from '../../app/AppContext';
import { changeViewAction } from '../../app/actions';
import { ViewLayout } from '../../app/types';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

export const TradingPosition: React.FunctionComponent = () => {
  const [, dispatch] = useContext(AppContext);

  const onFocusClick = () => {
    dispatch(changeViewAction(ViewLayout.TradingPosition));
  };

  const onOverviewClick = () => {
    dispatch(changeViewAction(ViewLayout.Overview));
  };

  const farItems: ICommandBarItemProps[] = [
    {
      key: 'orderText',
      text: 'Order Text',
      onRender: renderSearchBox,
    },
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

const renderSearchBox = () => (
  <SearchBox placeholder="Order text" iconProps={{ iconName: 'Filter' }} />
);

const items: ICommandBarItemProps[] = [
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
    key: 'market',
    text: 'Market',
    iconProps: { iconName: 'Market' },
    subMenuProps: {
      items: [
        {
          key: 'market1',
          text: 'Market 1',
        },
        {
          key: 'market2',
          text: 'Market 2',
        },
        {
          key: 'market3',
          text: 'Market 3',
        },
      ],
    },
  },
  {
    key: 'exportExcel',
    text: 'Export ',
    iconProps: { iconName: 'ExcelDocument' },
    onClick: () => console.log('Export'),
  },
];
