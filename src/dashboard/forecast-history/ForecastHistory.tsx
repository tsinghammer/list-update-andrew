import React from 'react';
import { Chart } from './Chart';
import { NavigatorCard } from '../NavigatorCard';
import { ScrollablePane, ScrollbarVisibility, Sticky } from '@fluentui/react';
import { CardTitle } from '../CardTitle';

export const ForecastHistoryCardId = 'forecastHistory';

export const ForecastHistory: React.FunctionComponent = () => {
  return (
    <NavigatorCard cardId={ForecastHistoryCardId}>
      <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
        <Sticky>
          <CardTitle cardId={ForecastHistoryCardId} title="Forecast History" />
        </Sticky>
        <Chart />
      </ScrollablePane>
    </NavigatorCard>
  );
};
