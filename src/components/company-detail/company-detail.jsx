import { Link } from "react-router-dom"
import TableComponent from "../TableComponents"
import { FileSpreadsheet, UsersRound, Plus } from "lucide-react"
import { useParams } from 'react-router-dom';
import ChartOne from "../chart/ChartOne";
import ChartTwo from "../chart/ChartTwo";
import TableThree from "../tables/tableOne";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import InvoicesModalForm from "../modals/InvoicesModalForm";

function CompanyDetails() {

    const { id_number } = useParams()

    const [invoices, setInvoices] = useState([])
    const [clients, setClients] = useState([])
    const [company, setCompany] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // console.log(invoices);

    const [oenCompanyForm, setOpenCompanyForm] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        axiosInstance
          .get(`company/informations/${id_number}`)
    
          .then(function (response) {
            setCompany({...response.data});
          })
    
          .catch(function (error) {
        });

        axiosInstance
          .get(`company/${id_number}/customers/`)
    
          .then(function (response) {
            setClients([...response.data]);
          })
    
          .catch(function (error) {
        });

        axiosInstance
          .get(`company/${id_number}/invoices/`)
    
          .then(function (response) {
            setInvoices([...response.data]);
          })
    
          .catch(function (error) {
        });
        setIsLoading(false)
    }, [oenCompanyForm])

    return (
    <>
        <div className="flex items-center justify-between px-4 py-4 border-b dark:border-b-[#7b5df9] lg:py-6">
            <h1 className="text-2xl font-semibold dark:text-gray-100">{company.name}</h1>
            <button
            className="px-4 py-2 text-sm text-white rounded-md bg-[rgba(123,93,249,0.7)] hover:bg-[rgba(123,93,249,0.9)] focus:outline-none  sm:block hidden font-semibold"
            onClick={()=>{setOpenCompanyForm(true)}}
            >
            Nouvelle facture
            </button>

            <button className="sm:hidden block text-[rgba(123,93,249,1)]" onClick={()=>{setOpenCompanyForm(true)}}>
                <Plus strokeWidth={"4"} size={"27"}/>
            </button>

            <InvoicesModalForm isDisplayed={oenCompanyForm} setState={setOpenCompanyForm} companies={invoices} setCompanies={setInvoices} customers={clients}/>
  
        </div>



        <div className="px-[1em] py-[2em]">
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <div className="col-span-12 lg:col-span-8">
                    <ChartOne/>
                </div>
                
                <div className="col-span-12 lg:col-span-4">
                    <ChartTwo/>
                </div>
            </div>
        </div>

        <div className="px-[1em] py-[2em]">
            <TableThree  invoiceList = {invoices} isLoading={isLoading}/>
        </div>

    </>
  )
}

export default CompanyDetails