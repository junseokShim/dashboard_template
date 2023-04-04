import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Year', 'Sales'],
  ['2014', 1000],
  ['2015', 1170],
  ['2016', 660],
  ['2017', 1030],
];

function convertData(data) {
  const chartData = [['day', 'price']];
  data.forEach((d) => chartData.push([d.date.slice(0, 4), d.price]));
  return chartData;
}

const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
};

const StockChart = (props) => {
  console.log(props.receivedData)
  const data_to_json = JSON.parse(`{${props.receivedData.trim().slice(1, -1)}}`);
  //const data_to_json = JSON.parse(`{${props.receivedData}}`);

  console.log(data_to_json.data)

  if (props.receivedData !== ""){

    if (data_to_json.data.length >= 1) {
      return (
        <Chart chartType="LineChart" data={data_to_json.data} options={options} width="100%" height="400px" />
      );

    }

  }

  return (
    <div>
      
    </div>
  );
};

export default StockChart;