import { AppState, ViewLayout } from './types';

export const initialState: AppState = {
  viewLayout: ViewLayout.Overview,
  showGlobalDropFocus: false,
  updateIntervalInMilliSeconds: 10_000,
};

export default initialState;
