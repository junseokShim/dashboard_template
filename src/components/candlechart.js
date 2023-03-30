import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'react-highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

// 데이터 CSV 파일 import
const csvFilePath = require('../path-to-csv-file.csv');
const csv = require('csvtojson');

addHighchartsMore(Highcharts);

class StockCandleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // 차트 데이터
      settings: {
        chart: {
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
        },
        title: {
          text: '주식 차트',
        },
        series: [
          {
            name: '종가',
            type: 'candlestick',
            data: [],
          },
        ],
        xAxis: {
          type: 'datetime',
          showEmpty: false,
        },
        yAxis: {
          title: {
            text: '가격',
          },
          labels: {
            formatter: function() {
              return '$' + this.value;
            },
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b> (Open: $<b>{point.open}</b>, High: $<b>{point.high}</b>, Low: $<b>{point.low}</b>, Close: $<b>{point.close}</b>)<br/>',
          valueDecimals: 2,
          split: true,
        },
      },
    };
    this.loadChartData = this.loadChartData.bind(this);
  }

  componentDidMount() {
    this.loadChartData();
  }

  async loadChartData() {
    const data = await csv().fromFile(csvFilePath); // CSV 파일 데이터 JSON으로 변환
    let chartData = [];

    // 데이터 가공
    data.forEach((d) => {
      const timestamp = new Date(d.Date).getTime();
      const row = [timestamp, d.Open, d.High, d.Low, d.Close];
      chartData.push(row);
    });
    this.setState({ data: chartData });
  }

  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          ...this.state.settings,
          series: [
            {
              ...this.state.settings.series[0],
              data: this.state.data,
              whiskerLength: 0,
              dataGrouping: {
                units: [['day', [1]]],
              },
            },
          ],
        }}
      />
    );
  }
}

export default StockCandleChart;