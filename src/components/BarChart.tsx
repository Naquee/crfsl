import React from 'react';
import ReactECharts from 'echarts-for-react'; // Ensure this is installed

const BarChart = () => {
  const option = {
    title: {
      text: 'Consultancy Services Breakdown',
      subtext: 'Visualizing different consultancy services',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Secured Loans', 'Unsecured Loans', 'Insurances', 
        'Mutual Funds', 'Credit Risk Rating Advisory'
      ]
    },
    series: [
      {
        name: 'Consultancy Services',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 4, name: 'Secured Loans' },
          { value: 2, name: 'Unsecured Loans' },
          { value: 4, name: 'Insurances' },
          { value: 3, name: 'Mutual Funds' },
          { value: 5, name: 'Credit Risk Rating Advisory' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        opts={{ height: 'auto', width: 'auto' }}
      />
    </div>
  );
};

export { BarChart };
