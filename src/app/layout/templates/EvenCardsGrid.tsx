import { StackItem, Stack, IStackTokens } from '@fluentui/react';
import React, { ReactNode } from 'react';
import { stackItemStyles, stackStyles } from './commonStyles';

interface Props {
  children: ReactNode[];
}

const stackTokens: IStackTokens = {
  childrenGap: 10,
};

const stackItemTokens: IStackTokens = {
  padding: 0,
};

export const EvenCardsGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < children.length; i += 2) {
    nodes.push(
      <StackItem
        key={`evenCardsGridItem${i}`}
        styles={stackItemStyles}
        tokens={stackItemTokens}
        grow
      >
        <Stack styles={stackStyles} horizontal tokens={stackTokens}>
          <StackItem styles={stackItemStyles} grow>
            {children[i]}
          </StackItem>
          <StackItem styles={stackItemStyles} grow>
            {children[i + 1]}
          </StackItem>
        </Stack>
      </StackItem>
    );
  }

  return <>{nodes}</>;
};
