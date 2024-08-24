import React from 'react';
import Chart from 'react-apexcharts';

const ChartOne = () => {
  const options = {
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        },
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
    series: [
      {
        name: "Developer Edition",
        data: [150, 141, 145, 152, 135, 125, 152, 141, 150, 145, 152, 135],
        color: "#1A56DB",
      },
      {
        name: "Designer Edition",
        data: [43, 13, 65, 12, 42, 73, 43, 13, 65, 65, 12, 52],
        color: "#7E3BF2",
      },
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      height: 320,
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className='bg-white shadow overflow-hidden dark:bg-[#141625] rounded-lg max-h-[26.8em]'>
        <div className="flex w-full flex-wrap gap-3 sm:gap-5 px-3 pt-6 pb-3">
          <div className="flex min-w-[9em]">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#1A56DB]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#1A56DB]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#1A56DB]">Factures Payées</p>
            </div>
          </div>
          <div className="flex min-w-[10em]">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#7E3BF2]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#7E3BF2]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#7E3BF2]">Factures Impayées</p>
            </div>
          </div>
        </div>
        <div className=''>
            <Chart options={options} series={options.series} type="area" height={360} width="100%" />
        </div>
    </div>
  );
};

export default ChartOne;
