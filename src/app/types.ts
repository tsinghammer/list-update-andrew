import { WindowLayout } from './layout/types';

export enum ViewLayout {
  Overview,
  ExternalTrades,
  TradingPosition,
}

export interface AppState {
  viewLayout: ViewLayout;
  windowLayout?: WindowLayout;
  showGlobalDropFocus: boolean;
  updateIntervalInMilliSeconds: number;
}

export type AppAction =
  | {
      type: 'CHANGE_VIEW';
      payload: ViewLayout;
    }
  | {
      type: 'CHANGE_WINDOW_LAYOUT';
      payload: WindowLayout;
    }
  | {
      type: 'ADD_CARD_TO_WINDOW_LAYOUT';
      payload: string;
    }
  | {
      type: 'REMOVE_CARD_FROM_WINDOW_LAYOUT';
      payload: string;
    }
  | {
      type: 'RESET_LAYOUT';
    }
  | {
      type: 'SET_SHOW_GLOBAL_DROP_FOCUS';
      payload: boolean;
    }
  | {
      type: 'SET_UPDATE_INTERVAL';
      payload: number;
    };
