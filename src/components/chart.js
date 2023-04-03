import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Year', 'Sales'],
  ['2014', 1000],
  ['2015', 1170],
  ['2016', 660],
  ['2017', 1030],
];

function convertData(originalData) {
  // originalData가 배열이 아니면 빈 배열([])을 반환
  if (!Array.isArray(originalData)) {
    return [];
  }
  
  const convertedData = [["date", "price"]];

  originalData.forEach((item) => {
    convertedData.push([item.date, item.price]);
  });

  return convertedData;
}

const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
};

const StockChart = (props) => {
  //const dataLength = props.receivedData.data.length;
  console.log(props.receivedData)
  const data = convertData(props.receivedData)
  console.log(data)
  return (
    <Chart chartType="LineChart" data={data} options={options} width="100%" height="400px" />
  );
};

export default StockChart;