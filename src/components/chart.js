import React from 'react';
import { Chart } from 'react-google-charts';


function convertData(data) {
  const chartData = [['Day', 'Price', 'MA20', 'MA60', 'MA90']];
  
  for (let i = 0; i<100; i++){
    console.log(data[i])
    if (data[i] && data[i].date && data[i].price && data[i].MA20) {
      chartData.push([data[i].date, data[i].price, data[i].MA20, data[i].MA60, data[i].MA90])
    }
  }
  return chartData;
}


const StockChart = (props) => {
  const title_name = props.selectedStock + " Performance";
  const data_to_json = JSON.parse(`{${props.receivedData.trim().slice(1, -1)}}`);

  const options = {
    title: title_name,
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  if (props.receivedData !== ""){
    if (data_to_json.data.length >= 1) {
      const convertedData = convertData(data_to_json.data)
      return (
        <Chart chartType="LineChart" data={convertedData} options={options} width="100%" height="400px" />
      );
    }
  }

  return (
    <div>      
    </div>
  );
};

export default StockChart;