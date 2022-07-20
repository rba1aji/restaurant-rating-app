import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function DetailedRating() {
  const [series, setSeries] = useState([
    {
      name: 'Rating',
      data: [4, 2, 3, 1, 5],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      // height: 350,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [
        'Overall',
        'Food',
        'Service',
        'Ambience',
        `Value \nfor money`,
      ],
    },
    yaxis: {
      labels: {
        align: 'left',
        style: {
          fontSize: '14px',
        },
      },
      axisBorder:{
        show:true,
      }, 
    },
    theme: {
      palette: 'palette9',
    },
  });

  return (
    <div style={{ marginLeft: '5vw', marginRight: '10vw' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />
    </div>
  );
}
