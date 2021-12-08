import React from 'react';
import { Header } from './header/Header';
import {
  getTheme,
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
  mergeStyleSets,
  Stack,
  StackItem,
} from '@fluentui/react';

import { AppContextProvider } from './app/AppContext';
import { Layout } from './app/layout/Layout';
import { Footer } from './footer/Footer';
import { GlobalDropZone } from './app/layout/GlobalDropZone';

const theme = getTheme();

const classes = mergeStyleSets({
  header: {
    boxShadow: theme.effects.elevation8,
  },
});

const stackStyles: IStackStyles = {
  root: {
    height: '100vh',
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

export const App: React.FunctionComponent = () => {
  return (
    <AppContextProvider>
      <Stack styles={stackStyles} tokens={verticalGapStackTokens}>
        <StackItem styles={stackItemStyles} className={classes.header}>
          <Header />
        </StackItem>
        <StackItem grow={1} styles={stackItemStyles}>
          <GlobalDropZone>
            <Layout />
          </GlobalDropZone>
        </StackItem>
        <StackItem styles={stackItemStyles}>
          <Footer />
        </StackItem>
      </Stack>
    </AppContextProvider>
  );
};
