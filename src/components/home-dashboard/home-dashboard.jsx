import { motion } from "framer-motion";
import ChartThree from "../chart/donutChart";
import RecentIvoices from "../RencentIvoice";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";

function HomeDashboard() {

    const [collaborators, setCollaborators] = useState([])
    const [invoices, setInvoices] = useState([])
    const [clients, setClients] = useState([])
    const [compagnies, setCompagnies] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axiosInstance
          .get("accounts/get_collaborators/")
    
          .then(function (response) {
            setCollaborators(...[response.data]);
          })
    
          .catch(function (error) {
        });

        axiosInstance
          .get("company/informations/")
    
          .then(function (response) {
            setCompagnies(...[response.data]);
          })
    
          .catch(function (error) {
        });

        axiosInstance
          .get("company/customers/")
    
          .then(function (response) {
            setClients(...[response.data]);
          })
    
          .catch(function (error) {
        });

        axiosInstance
          .get("company/all_invoices/")
    
          .then(function (response) {
            setInvoices(...[response.data]);
          })
    
          .catch(function (error) {
            console.log("errr");
        });
        setIsLoading(false)
    }, [])


    return (
        <>
            <div class="flex items-center justify-between px-4 py-4 border-b dark:border-b-[#7b5df9] lg:py-6 dark:border-primary-darker">
                <h1 class="text-2xl font-semibold dark:text-gray-100">Dashboard</h1>
                <div className="flex gap-[0.5em]">
                    <p className="font-semibold dark:text-[rgba(123,93,249,0.7)] text-[rgba(123,93,249,0.5)]">Dashboard </p>
                </div>
            </div>
            <div className="mt-2">
                <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                        <div>
                            <h6
                            className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                            >
                            Factures
                            </h6>
                            <span className="text-xl font-semibold dark:text-gray-300">{invoices.length}</span>
                            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +0%
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg
                                className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                        <div>
                            <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                            >
                            Clients
                            </h6>
                            <span className="text-xl font-semibold dark:text-gray-300">{clients.length}</span>
                            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +%
                            </span>
                        </div>
                        <div>
                            <span>
                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                        <div>
                            <h6
                            className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                            >
                            Collaborateurs
                            </h6>
                            <span className="text-xl font-semibold dark:text-gray-300">{collaborators.length}</span>
                            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +0%
                            </span>
                        </div>
                        <div>
                            <span>
                                <svg
                                    className="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-[#141625]">
                        <div>
                            <h6
                            class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light"
                            >
                            Compagnie
                            </h6>
                            <span class="text-xl font-semibold dark:text-gray-300">{compagnies.length}</span>
                            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +0%
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg
                                class="w-12 h-12 text-gray-300 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
                {/* on work */}
                <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
                    {/* line chart */}
                    <RecentIvoices invoiceList = {invoices} isLoading={isLoading}/>

                    {/* donut chart */}

                    <div>
                        <ChartThree invoiceList={invoices}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeDashboard