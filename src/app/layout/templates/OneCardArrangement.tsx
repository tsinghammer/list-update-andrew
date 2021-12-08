import { Stack, StackItem } from '@fluentui/react';
import React, { ReactNode } from 'react';
import { stackStyles, gapStackTokens, stackItemStyles } from './commonStyles';

interface Props {
  children: ReactNode;
}

export const OneCardArrangement: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { children } = props;

  return (
    <Stack styles={stackStyles} tokens={gapStackTokens}>
      <StackItem styles={stackItemStyles} grow>
        {children}
      </StackItem>
    </Stack>
  );
};
