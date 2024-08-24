import { Building2, ArrowUp, EllipsisVertical } from "lucide-react"
import { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import { Link } from "react-router-dom";
import CustomersCreationForm from "../modals/CustomersCreationForm";


const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Client",
        data: [
          { x: "Jan", y: 231 },
          { x: "Fev", y: 122 },
          { x: "Mar", y: 63 },
          { x: "Avr", y: 421 },
          { x: "Mai", y: 122 },
          { x: "Jui", y: 323 },
          { x: "Jul", y: 111 },
          { x: "Oau", y: 111 },
          { x: "Sep", y: 111 },
          { x: "Oct", y: 111 },
          { x: "Nov", y: 111 },
          { x: "Dec", y: 111 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: 320,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 0,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
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
      show: false,
    },
    fill: {
      opacity: 1,
    },
};

function CompanyCard({ pk, name, email, phone, adress, country, city, services }) {

  const [isLoading, setIsLoading] = useState(false)

  const [oenCompanyForm, setOpenCompanyForm] = useState(false)

  const [ actions, setActions ] = useState(false)

  return (
    <>

      <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-[#141625] p-4 md:p-6">
        <div class="">
            <p className="font-semibold text-[1.1em] dark:text-gray-200">Clients enregistrés</p>
        </div>

        <div className="overflow-x-scroll scrollbar">
          <div className="w-[20em]">
              <ReactApexChart options={options} series={options.series} type="bar" height={280} />
          </div>
        </div>
          
        <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
          <div class="flex justify-between items-center pt-5">
            {/* <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                
            </div> */}
            <Link
              to={``}
              className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
              Details
              <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            </Link>

            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={()=>setActions(!actions)}
              >
                <EllipsisVertical size={20}/>
              </button>

              <ul tabIndex={0} className={`${!actions && "hidden"} absolute right-[2.5em] bottom-[1.5em] bg-white dark:bg-[#1e213b] z-[150] menu shadow rounded-md w-52 overflow-hidden`}>
                <li className="border-b dark:border-b-gray-500 dark:text-gray-200">
                  <button className="p-2 w-full text-left font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={()=>{
                    setActions(false)
                  }}
                  
                  >Modifier</button>
                </li>
                <li className="">
                  <button className="p-2 w-full text-left dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={()=> 
                    {
                      setOpenCompanyForm(true),
                      setActions(false)
                    }
                  }

                  >Nouveau client</button>
                </li>
              </ul>
              <CustomersCreationForm isDisplayed={oenCompanyForm} setState={setOpenCompanyForm}/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default CompanyCard;