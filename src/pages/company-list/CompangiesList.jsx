import { useContext, useState, useEffect } from "react"
import CompanyModalForm from "../../components/modals/companyModalForm"
import { useSelector } from "react-redux";
import CompanyCard from "../../cards/Card"
import { Plus } from "lucide-react"
import { axiosInstance } from "../../config/axiosInstance";
import WarningModal from "../../components/modals/WarningSupress";


function CompagniesList() {

  const darkMode = useSelector((state) => state.theme.value);
  const [oenCompanyForm, setOpenCompanyForm] = useState(false)

  const [ companies, setCompanies] = useState([])

  useEffect(() => {
    axiosInstance
      .get("company/informations/")

      .then(function (response) {
        setCompanies(...[response.data]);
      })

      .catch(function (error) {
    });
  }, [oenCompanyForm])

// console.log(companies);

  return (
    <>        
      <div class="flex items-center justify-between px-4 py-4 border-b dark:border-b-[rgba(123,93,249,0.7)] lg:py-6 dark:border-primary-darker">
          <h1 class="text-2xl font-semibold dark:text-gray-100">Companies</h1>
          <button
          className="px-4 py-2 text-sm text-white rounded-md bg-[rgba(123,93,249,0.7)] rgba(123,93,249,0.7)] hover:bg-[rgba(123,93,249,0.9)] focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark font-semibold sm:block hidden"
          onClick={()=>{setOpenCompanyForm(true)}}
          >
              Nouvelle compagnie
          </button>

          <button className="sm:hidden block text-[rgba(123,93,249,1)]" onClick={()=>{setOpenCompanyForm(true)}}>
            <Plus strokeWidth={"4"} size={"27"}/>
          </button>
          <CompanyModalForm isDisplayed={oenCompanyForm} setState={setOpenCompanyForm} companies={companies} setCompanies={setCompanies}/>
      </div>
      <div class="flex flex-wrap mt-10 px-[1em] gap-[0.5em]">

        {
          companies.map((company) => (
            <CompanyCard pk={company.pk} name={company.name} email={company.email} phone={company.phone}
              adress={company.adress} country={company.country} city={company.city} services={company.services} id_number={company.id_number}
            />
          ))
        }   

      </div>

      <div>
    
      
      </div>

    </>
    )
  }
  
  export default CompagniesList