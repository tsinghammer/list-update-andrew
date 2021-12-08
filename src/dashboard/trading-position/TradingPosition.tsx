import React from 'react';

import { Chart } from './Chart';
import { NavigatorCard } from '../NavigatorCard';
import { ScrollablePane, ScrollbarVisibility, Sticky } from '@fluentui/react';
import { CardTitle } from '../CardTitle';

export const TradingPositionCardId = 'tradingPosition';

export const TradingPosition: React.FunctionComponent = () => {
  return (
    <NavigatorCard cardId={TradingPositionCardId}>
      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
        <Sticky>
          <CardTitle cardId={TradingPositionCardId} title="Trading Position" />
        </Sticky>
        <Chart />
      </ScrollablePane>
    </NavigatorCard>
  );
};
