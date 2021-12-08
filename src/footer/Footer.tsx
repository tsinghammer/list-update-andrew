import { mergeStyleSets, Image } from '@fluentui/react';
import { NeutralColors } from '@uifabric/fluent-theme';
import React from 'react';

const classes = mergeStyleSets({
  footer: {
    backgroundColor: NeutralColors.white,
    // position: 'fixed',
    // bottom: 0,
    height: 44,
    width: '100%',
  },
  logo: {
    float: 'right',
  },
});

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <Image src="/likron-logo.png" />
      </div>
    </div>
  );
};
