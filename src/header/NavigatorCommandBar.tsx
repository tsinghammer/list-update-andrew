import React from 'react';
import {
  createTheme,
  Customizer,
  CommandBar,
  mergeStyleSets,
  ICommandBarProps,
} from '@fluentui/react';
import { NeutralColors } from '@uifabric/fluent-theme';
import { NavigatorPalette } from '../theme/NavigatorPalette';

const classes = mergeStyleSets({
  commandBar: {
    backgroundColor: NeutralColors.gray10,
    // marginLeft: -20,
  },
});

const commandBarTheme = createTheme({
  palette: {
    themePrimary: NavigatorPalette.themePrimary,
    themeDark: NavigatorPalette.themeDark,
    themeDarkAlt: NavigatorPalette.themeDarkAlt,
    white: NeutralColors.gray10,
  },
});

export const NavigatorCommandBar: React.FunctionComponent<ICommandBarProps> = (
  props: ICommandBarProps
) => {
  return (
    <div>
      <Customizer settings={{ theme: commandBarTheme }}>
        <CommandBar
          className={classes.commandBar}
          ariaLabel="Use left and right arrow keys to navigate between commands"
          {...props}
        />
      </Customizer>
    </div>
  );
};
