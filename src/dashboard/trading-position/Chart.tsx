import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { SharedColors, FontSizes } from '@uifabric/fluent-theme';

const options: Highcharts.Options = {
  // chart:{
  //   type: 'column'
  // },
  title: {
    text: undefined,
    align: 'left',
    style: { fontSize: FontSizes.mediumPlus },
  },
  plotOptions: {
    column: {
      stacking: 'overlap',
      shadow: false,
      // dataLabels: {
      //   enabled: true,
      // },
    },
  },
  series: [
    {
      color: SharedColors.cyan10,
      name: 'Hidden Open Buy',
      type: 'column',
      data: [
        [0, 4],
        [1, 4],
        [4, 2],
        [9, 3],
        [14, 2],
        [16, 5],
        [17, 2],
        [18, 5],
        [20, 1],
        [21, 2],
        [22, 7],
      ],
    },
    {
      color: SharedColors.cyan20,
      name: 'Open Buy',
      type: 'column',
      data: [
        [16, 2],
        [17, 2],
        [18, 2],
      ],
    },
    {
      color: SharedColors.cyan30,
      name: 'Bought',
      type: 'column',
      data: [
        [16, 3],
        [17, 7],
        [18, 2],
      ],
    },
    {
      color: SharedColors.red10,
      name: 'Hidden Open Sell',
      type: 'column',
      data: [
        [1, -8],
        [2, -2],
        [3, -1],
        [4, -4],
        [6, -2],
        [7, -1],
        [8, -2],
        [9, -9],
        [10, -10],
        [11, -11],
        [12, -5],
        [13, -5],
        [14, -8],
        [15, -8],
        [16, -8],
        [17, -8],
        [18, -8],
        [19, -6],
        [20, -12],
        [21, -12],
        [22, -12],
        [23, -14],
        [24, -12],
      ],
    },
    {
      color: SharedColors.red20,
      name: 'Hidden Open Sell',
      type: 'column',
      data: [
        [14, -8],
        [15, -8],
        [18, -8],
        [19, -4],
        [20, -4],
      ],
    },
    {
      color: SharedColors.pinkRed10,
      name: 'Sold',
      type: 'column',
      data: [
        [12, -7],
        [13, -7],
        [14, -5],
        [15, -5],
        [16, -8],
        [17, -8],
        [18, -8],
        [19, -3],
        [20, -6],
        [21, -6],
        [22, -6],
      ],
    },
    {
      color: SharedColors.yellowGreen10,
      name: 'Net Position',
      type: 'line',
      data: [
        [0, 0],
        [24, 0],
      ],
    },
  ],
  xAxis: {
    title: {
      text: 'Delivery start time',
    },
  },
  yAxis: {
    title: {
      text: 'Volumne (MW)',
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
      // containerProps={{ style: { flexBasis: '100%', minHeight: 0 } }}
    />
  );
};
