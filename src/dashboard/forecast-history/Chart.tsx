import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { NavigatorPalette } from '../../theme/NavigatorPalette';
import { FontSizes } from '@fluentui/react';
import { SharedColors, NeutralColors } from '@uifabric/fluent-theme';

const options: Highcharts.Options = {
  title: {
    text: undefined,
    align: 'left',
    style: { fontSize: FontSizes.mediumPlus },
  },
  series: [
    {
      color: SharedColors.cyanBlue20,
      name: 'ID 10:46',
      type: 'line',
      data: [
        [0, 110],
        [2, 50],
        [4, 55],
        [6, 70],
        [8, 150],
        [10, 170],
        [12, 170],
        [14, 250],
        [16, 400],
        [18, 510],
        [20, 650],
        [22, 650],
        [24, 550],
      ],
    },
    {
      color: SharedColors.cyanBlue10,
      name: 'ID 10:40',
      type: 'line',
      data: [
        [0, 100],
        [2, 45],
        [4, 40],
        [6, 60],
        [8, 140],
        [10, 140],
        [12, 160],
        [14, 230],
        [16, 380],
        [18, 500],
        [20, 620],
        [22, 650],
        [24, 530],
      ],
    },
    {
      color: NeutralColors.gray100,
      name: `DA ${new Date().toLocaleDateString()}`,
      type: 'line',
      data: [
        [0, 80],
        [2, 35],
        [4, 30],
        [6, 40],
        [8, 120],
        [10, 130],
        [12, 140],
        [14, 200],
        [16, 340],
        [18, 450],
        [20, 600],
        [22, 610],
        [24, 500],
      ],
    },
    {
      color: NavigatorPalette.themePrimary,
      name: 'Realization',
      type: 'line',
      data: [
        [0, 130],
        [2, 70],
        [4, 75],
        [6, 90],
        [8, 170],
        [10, 190],
        [12, 180],
      ],
    },
  ],
  yAxis: {
    title: {
      text: 'MW',
    },
  },
  credits: {
    text: `Updated: ${new Date().toLocaleTimeString()}`,
  },
};

export const Chart: React.FunctionComponent = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      // containerProps={{
      //   style: { flexBasis: '100%', minHeight: 0, width: '100' },
      // }}
    />
  );
};
