import { Stack } from '@fluentui/react';
import React, { ReactNode } from 'react';
import { stackStyles, gapStackTokens } from './commonStyles';
import { EvenCardsGrid } from './EvenCardsGrid';

interface Props {
  children: ReactNode[];
}

export const EvenCardArrangement: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { children } = props;

  return (
    <Stack styles={stackStyles} tokens={gapStackTokens}>
      <EvenCardsGrid>{children}</EvenCardsGrid>
    </Stack>
  );
};
