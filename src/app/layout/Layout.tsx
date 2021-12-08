import React, { useContext } from 'react';
import {
  ExternalTrades,
  ExternalTradesCardId,
} from '../../dashboard/external-trades/ExternalTrades';
import {
  ForecastHistory,
  ForecastHistoryCardId,
} from '../../dashboard/forecast-history/ForecastHistory';
import {
  TradingPosition,
  TradingPositionCardId,
} from '../../dashboard/trading-position/TradingPosition';
import { AppContext } from '../AppContext';
import { CardArrangement } from './CardArrangement';
import { useRestoreWindows, useSaveLayout } from './hooks';

export const Layout: React.FunctionComponent = () => {
  useRestoreWindows();
  useSaveLayout();
  const [{ windowLayout }] = useContext(AppContext);

  return (
    <CardArrangement>
      {windowLayout?.cards.map((card) => {
        switch (card) {
          case ExternalTradesCardId:
            return <ExternalTrades key={ExternalTradesCardId} />;
          case ForecastHistoryCardId:
            return <ForecastHistory key={ForecastHistoryCardId} />;
          case TradingPositionCardId:
            return <TradingPosition key={TradingPositionCardId} />;
          default:
            break;
        }
      })}
    </CardArrangement>
  );
};
