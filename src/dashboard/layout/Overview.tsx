import React from 'react';
import { ExternalTrades } from '../external-trades/ExternalTrades';
import {
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
  Stack,
  StackItem,
} from '@fluentui/react';

const stackStyles: IStackStyles = {
  root: {
    height: '100%',
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 20,
};

export const Overview: React.FunctionComponent = () => {
  return (
    <Stack styles={stackStyles} tokens={verticalGapStackTokens}>
      <StackItem styles={stackItemStyles} grow={1}>
        <ExternalTrades />
      </StackItem>
    </Stack>
  );
};
