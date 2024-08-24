import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { compterPaidFalseEtTrue } from '../../statistiques/chartThreeDiagrams';

// const options = {
//   chart: {
//     fontFamily: 'Satoshi, sans-serif',
//     type: 'donut',
//   },
//   colors: ['#8566fa', '#7152e8', '#5e3fd6'],
//   labels: ['Payée', 'En cours', 'En projet'],
//   legend: {
//     show: false,
//     position: 'bottom',
//   },

//   plotOptions: {
//     pie: {
//       donut: {
//         size: '55%',
//         background: 'transparent',
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   responsive: [
//     {
//       breakpoint: 2600,
//       options: {
//         chart: {
//           width: 300,
//         },
//       },
//     },
//     {
//       breakpoint: 640,
//       options: {
//         chart: {
//           width: 200,
//         },
//       },
//     },
//   ],
// };

const ChartThree = ({invoiceList}) => {

  const InvoicesList = [...invoiceList]

  const options = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: ['#5e3fd6', '#6577F3'],
    labels: ['Payée', 'Non Payée'],
    legend: {
      show: false,
      position: 'bottom',
    },
  
    plotOptions: {
      pie: {
        donut: {
          size: '55%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const compterPaid = compterPaidFalseEtTrue(InvoicesList)

  // console.log(compterPaid);

  const [state, setState] = useState({
    series:  [57, 43],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [57, 43],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 rounded-md bg-white px-5 pb-5 pt-[1em] shadow-default dark:bg-[#141625]">
        <div className="mb-3 justify-between gap-4 sm:flex">
            <div>
                <h5 className="text-xl font-semibold text-gray-500 dark:text-gray-200">
                    Factures
                </h5>
            </div>
        </div>

        <div className="mb-2">
            <div id="chartThree" className="mx-auto flex justify-center">
            <ReactApexChart
                options={options}
                series={state.series}
                type="donut"
            />
            </div>
        </div>

        <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
            <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full  bg-[#5e3fd6]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Payées </span>
                    <span> {compterPaid[0]}% </span>
                    </p>
                </div>
            </div>
            <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Impayées </span>
                    <span> {compterPaid[1]}% </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChartThree;
