import { WindowLayout } from './layout/types';
import { ViewLayout, AppAction } from './types';

export const changeViewAction = (layout: ViewLayout): AppAction => {
  return {
    type: 'CHANGE_VIEW',
    payload: layout,
  };
};

export const changeWindowLayoutAction = (layout: WindowLayout): AppAction => {
  return {
    type: 'CHANGE_WINDOW_LAYOUT',
    payload: layout,
  };
};

export const addCardToWindowLayoutAction = (cardId: string): AppAction => {
  return {
    type: 'ADD_CARD_TO_WINDOW_LAYOUT',
    payload: cardId,
  };
};

export const removeCardFromWindowLayoutAction = (cardId: string): AppAction => {
  return {
    type: 'REMOVE_CARD_FROM_WINDOW_LAYOUT',
    payload: cardId,
  };
};

export const resetLayoutAction = (): AppAction => {
  return {
    type: 'RESET_LAYOUT',
  };
};

export const setShowGlobalDropFocus = (show: boolean): AppAction => {
  return {
    type: 'SET_SHOW_GLOBAL_DROP_FOCUS',
    payload: show,
  };
};

export const setUpdateIntervalAction = (interval: number): AppAction => {
  return {
    type: 'SET_UPDATE_INTERVAL',
    payload: interval,
  };
};
