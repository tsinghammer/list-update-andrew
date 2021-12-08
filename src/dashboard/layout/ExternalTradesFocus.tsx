import React from 'react';
import { ExternalTrades } from '../external-trades/ExternalTrades';
import { ForecastHistory } from '../forecast-history/ForecastHistory';
import { TradingPosition } from '../trading-position/TradingPosition';

export const ExternalTradesFocus: React.FunctionComponent = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12">
          <ExternalTrades />
        </div>
      </div>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm3">
          <ForecastHistory />
        </div>
        <div className="ms-Grid-col ms-sm3">
          <TradingPosition />
        </div>
      </div>
    </div>
  );
};
