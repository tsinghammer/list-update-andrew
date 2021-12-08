import { AppState, AppAction } from './types';
import produce from 'immer';
import { presets } from './layout/presets';

export const appReducer = produce(
  (draft: AppState, action: AppAction): AppState => {
    switch (action.type) {
      case 'CHANGE_VIEW': {
        draft.viewLayout = action.payload;
        break;
      }
      case 'CHANGE_WINDOW_LAYOUT': {
        console.log('CHANGE_WINDOW_LAYOUT', action.payload);
        draft.windowLayout = action.payload;
        break;
      }
      case 'ADD_CARD_TO_WINDOW_LAYOUT': {
        console.log('ADD_CARD_TO_WINDOW_LAYOUT', action.payload);
        const { windowLayout } = draft;
        if (!windowLayout) {
          break;
        }

        if (!windowLayout.cards.includes(action.payload)) {
          windowLayout.cards.push(action.payload);
        }

        break;
      }
      case 'REMOVE_CARD_FROM_WINDOW_LAYOUT': {
        console.log('REMOVE_CARD_FROM_WINDOW_LAYOUT', action.payload);
        const { windowLayout } = draft;
        if (!windowLayout) {
          break;
        }

        windowLayout.cards = windowLayout?.cards.filter(
          (x) => x !== action.payload
        );

        break;
      }
      case 'RESET_LAYOUT': {
        console.log('RESET_LAYOUT');
        draft.windowLayout = presets.overview;
        break;
      }
      case 'SET_SHOW_GLOBAL_DROP_FOCUS': {
        draft.showGlobalDropFocus = action.payload;
        break;
      }
      case 'SET_UPDATE_INTERVAL': {
        draft.updateIntervalInMilliSeconds = action.payload;
        break;
      }
      default:
        break;
    }

    return draft;
  }
);
