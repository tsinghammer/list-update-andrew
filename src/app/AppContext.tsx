import React, { useReducer, createContext, ReactNode } from 'react';
import { appReducer } from './reducer';
import initialState from './initialState';
import { AppState, AppAction } from './types';

export const AppContext = createContext<[AppState, React.Dispatch<AppAction>]>([
  { ...initialState },
  () => { },
]);

interface Props {
  children: ReactNode | ReactNode[];
}

export const AppContextProvider: React.FunctionComponent<Props> = (
  props: Props
) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
