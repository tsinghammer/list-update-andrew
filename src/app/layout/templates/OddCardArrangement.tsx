import { Stack, StackItem } from '@fluentui/react';
import React, { ReactNode } from 'react';
import { gapStackTokens, stackItemStyles, stackStyles } from './commonStyles';
import { EvenCardsGrid } from './EvenCardsGrid';

interface Props {
  children: ReactNode[];
}

export const OddCardArrangement: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { children } = props;

  return (
    <Stack styles={stackStyles} tokens={gapStackTokens}>
      <StackItem styles={stackItemStyles} grow>
        {children[0]}
      </StackItem>
      {Array.isArray(children)}
      <EvenCardsGrid>{children.slice(1)}</EvenCardsGrid>
    </Stack>
  );
};
