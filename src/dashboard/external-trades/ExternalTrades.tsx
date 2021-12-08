import React from 'react';
import { CardTitle } from '../CardTitle';
import { TradesList } from './TradesList';
import { ScrollablePane, ScrollbarVisibility, Sticky } from '@fluentui/react';
import { NavigatorCard } from '../NavigatorCard';

export const ExternalTradesCardId = 'externalTrades';

export const ExternalTrades: React.FunctionComponent = () => {
  return (
    <NavigatorCard cardId={ExternalTradesCardId}>
      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
        <Sticky>
          <CardTitle cardId={ExternalTradesCardId} title="External Trades" />
        </Sticky>
        <TradesList />
      </ScrollablePane>
    </NavigatorCard>
  );
};
