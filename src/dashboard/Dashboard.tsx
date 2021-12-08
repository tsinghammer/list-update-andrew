import React, { useContext } from 'react';
import { Overview } from './layout/Overview';
import { ExternalTradesFocus } from './layout/ExternalTradesFocus';
import { AppContext } from '../app/AppContext';
import { ViewLayout } from '../app/types';
import { TradingPositionFocus } from './layout/TradingPositionFocus';

export const Dashboard: React.FunctionComponent = () => {
  const [{ viewLayout }] = useContext(AppContext);

  switch (viewLayout) {
    case ViewLayout.Overview:
      return <Overview />;
    case ViewLayout.ExternalTrades:
      return <ExternalTradesFocus />;
    case ViewLayout.TradingPosition:
      return <TradingPositionFocus />;
    default:
      return <Overview />;
  }
};
