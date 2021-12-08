import { Pivot, PivotItem, mergeStyles } from '@fluentui/react';
import React from 'react';
import { NeutralColors } from '@uifabric/fluent-theme';
import { ExternalTrades } from './commands/ExternalTrades';
import { ForecastHistory } from './commands/ForecastHistory';
import { TradingPosition } from './commands/TradingPosition';
import { Settings } from './commands/Settings';

const pivotClass = mergeStyles({
  backgroundColor: NeutralColors.gray10,
  paddingLeft: 10,
});

export const Menu: React.FunctionComponent = () => {
  return (
    <Pivot className={pivotClass}>
      <PivotItem headerText="External Trades">
        <ExternalTrades />
      </PivotItem>
      <PivotItem headerText="Forecast History">
        <ForecastHistory />
      </PivotItem>
      <PivotItem headerText="Trading Position">
        <TradingPosition />
      </PivotItem>
      <PivotItem headerText="Settings">
        <Settings />
      </PivotItem>
      <PivotItem headerText="Infos" />
      <PivotItem headerText="Support" />
    </Pivot>
  );
};
