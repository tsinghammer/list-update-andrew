import { mergeStyleSets } from '@fluentui/react';
import React from 'react';

const classes = mergeStyleSets({
  wrapper: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px',
    gridAutoRows: '50%',
    gridTemplateAreas: '"a b" "c d"',
  },
  first: {
    gridArea: 'a',
  },
  second: {
    gridArea: 'd',
    // gridColumn: 1,
    // gridRow: 2,
  },
  placeholder: {
    height: '100%',
    backgroundColor: 'red',
  },
});

export const Playground: React.FunctionComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.first}>
        <div className={classes.placeholder}>Hello Content 1</div>
      </div>
      <div className={classes.second}>
        <div className={classes.placeholder}>Hello Content 2</div>
      </div>
    </div>
  );
};
