import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Year', 'Sales', 'Expenses'],
  ['2014', 1000, 400],
  ['2015', 1170, 460],
  ['2016', 660, 1120],
  ['2017', 1030, 540],
];

const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
};

const StockChart = () => {
  return (
    <Chart chartType="LineChart" data={data} options={options} width="100%" height="400px" />
  );
};

export default StockChart;