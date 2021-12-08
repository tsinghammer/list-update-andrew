import React from 'react';
import { NeutralColors } from '@uifabric/fluent-theme';
import {
  mergeStyles,
  IconButton,
  IIconProps,
  Stack,
  FontSizes,
  FontWeights,
} from 'office-ui-fabric-react';
import { NavigatorPalette } from '../theme/NavigatorPalette';

const headerClass = mergeStyles({
  backgroundColor: NavigatorPalette.themePrimary,
  height: 48,
  width: '100%',
});

const appsButtonClass = mergeStyles({
  color: NeutralColors.white,
  fontSize: FontSizes.large,
  lineHeight: 48,
  marginLeft: 10,
});

const appTitleClass = mergeStyles({
  color: NeutralColors.white,
  fontSize: FontSizes.mediumPlus,
  fontWeight: FontWeights.semibold,
  lineHeight: 48,
});

const waffleIcon: IIconProps = {
  iconName: 'Waffle',
  style: { fontSize: FontSizes.xxLarge },
};

const stackTokens = { childrenGap: 20 };

export const TitleBar: React.FunctionComponent = () => {
  return (
    <div className={headerClass}>
      <Stack horizontal verticalAlign="center" tokens={stackTokens}>
        <Stack.Item align="center">
          <IconButton
            className={appsButtonClass}
            iconProps={waffleIcon}
            primary
          />
        </Stack.Item>
        <Stack.Item align="center">
          <div className={appTitleClass}>Navigator</div>
        </Stack.Item>
      </Stack>
    </div>
  );
};
