import { ExternalTradesCardId } from '../../dashboard/external-trades/ExternalTrades';
import { ForecastHistoryCardId } from '../../dashboard/forecast-history/ForecastHistory';
import { TradingPositionCardId } from '../../dashboard/trading-position/TradingPosition';
import { Preset } from './types';

export const presets: Preset = {
  overview: {
    name: '',
    cards: [ExternalTradesCardId, ForecastHistoryCardId, TradingPositionCardId],
    restored: true,
  },
};
