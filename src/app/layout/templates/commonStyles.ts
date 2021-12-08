import { IStackStyles, IStackItemStyles, IStackTokens } from '@fluentui/react';

export const stackStyles: IStackStyles = {
  root: {
    height: '100%',
    width: '100%',
  },
};

export const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};

export const gapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 20,
};
