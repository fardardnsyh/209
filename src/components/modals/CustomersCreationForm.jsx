import { axiosInstance } from "../../config/axiosInstance"
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { City, Country, State } from "country-state-city";
import Selector from "../Selector";
import ErrorMessage from "../ErrorMessage";
import { CompanyFieldsValidators, ActivitiesValidators, LoginEmailValidators } from "../../utils/usefulFeatures";
import SuccessRequestModal from "./successRequestModal";
import ErrorRequestModal from "./ErrorRequestModal";
import { X } from "lucide-react"
import { useParams } from "react-router-dom";


function CustomersCreationForm({isDisplayed, setState}) {

    const [isLoading, setIsloading] = useState(false)

    const [success, SetSuccess] = useState(false)
    const [error, setError] = useState(false)

    const { id_number } = useParams()

    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();

    const [country, setCountry] = useState(countryData[0]);
    const [state, setStates] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
      setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
      setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
      stateData && setStates(stateData[0]);
    }, [stateData]);

    useEffect(() => {
      cityData && setCity(cityData[0]);
    }, [cityData]);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        services: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});



    const onSubmit = (data) =>{
        setIsloading(true)
        const { name, email, phone, adress, services } = data;

        axiosInstance
        .post("company/customers/", {
            name: `${name}`,
            email: `${email}`,
            phone: `${phone}`,
            adress: `${adress}`,
            country: `${country.name}`,
            city: `${city.name}`,
            state: `${state.name}`,
            services: `${services}`,
            id_number: `${id_number}`
            })
        .then(function (response) {
            SetSuccess(true)
            setError(false);
            setState(false)
            setIsloading(false)

        })
        .catch(function (error) {
            console.log("err");
            setError(true)
            SetSuccess(false)
            setState(false)
            setIsloading(false)
        });
        reset();
    }

    useEffect(() => {
        if (error) {
          const timeout = setTimeout(() => {
            setError(false);
          }, 5000);
    
          return () => clearTimeout(timeout);
        }
        if (success) {
            const timeout = setTimeout(() => {
                SetSuccess(false)
            }, 5000);
      
            return () => clearTimeout(timeout);
          }
    }, [error, success]);


    return (
        <>

            <SuccessRequestModal message={"Informations enregistrés avec succès"} isSuccess={success} setSuccess={SetSuccess}/>
                    
            <ErrorRequestModal message={"Une erreur s'est produite lors de l'envoi des données. Veuiller réessayer."} isError={error} setError={setError}/>

            <div className={`fixed inset-0 z-40 flex items-start px-2 sm:px-0 pt-6 justify-center bg-black bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-70 ${!isDisplayed && "hidden"}`}>

                <section className="lg:w-[50em] lg:h-[40em] md:h-[35em] h-[32em] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-[#141625] generalScrollbar overflow-y-auto relative">
                    <button className="absolute top-2 right-2 dark:text-gray-200" onClick={()=>{setState(false)}}>
                        <X />
                    </button>
                    <h1 className="text-xl font-bold capitalize text-gray-900 dark:text-gray-200">Nouvau Client</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="name">Nom</label>
                                <input id="name" type="text" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                    {...register(
                                        "name",
                                        CompanyFieldsValidators()
                                    )}
                                />
                                <ErrorMessage message={errors.name ? errors.name.message: ""}/>
                            </div>

                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="emailAddress">Email</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                    {...register(
                                        "email",
                                        LoginEmailValidators()
                                    )}
                                />
                            </div>

                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="phone">Téléphone</label>
                                <input id="phone" type="text" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                    {...register(
                                        "phone",
                                        CompanyFieldsValidators()
                                    )}
                                />
                                <ErrorMessage message={errors.phone ? errors.phone.message: ""}/>
                            </div>

                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="city">Pays</label>
                                <Selector data={countryData} selected={country} setSelected={setCountry}
                                />
                            </div>
                            {state && (
                                <div className="mb-4">
                                    <label className="text-gray-900 dark:text-gray-200 font-medium" for="city">Province</label>
                                    <Selector data={stateData} selected={state} setSelected={setStates}/>
                                </div>
                            )}
                                                                
                            {city && (
                                <div className="mb-4">
                                    <label className="text-gray-900 dark:text-gray-200 font-medium" for="city">Ville</label>
                                    <Selector data={cityData} selected={city} setSelected={setCity} />
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 mt-4">
                            <label className="text-gray-900 dark:text-gray-200 font-medium" for="adress">Complément d'adrèsse</label>
                            <input id="adress" type="text" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                            {...register(
                                "adress",
                                ActivitiesValidators()
                            )}
                            />
                            <ErrorMessage message={errors.adress ? errors.adress.message: ""}/>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                            <div>
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="passwordConfirmation">Activités</label>
                                <textarea id="textarea" type="textarea" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                {...register(
                                    "services",
                                    ActivitiesValidators()
                                )}
                                ></textarea>
                                <ErrorMessage message={errors.services ? errors.services.message: ""}/>
                            </div>
                        </div>
                        <div class="flex flex-row-reverse p-3 justify-center sm:justify-start">
                            <div class="flex-initial pl-3">
                                <button type="submit" className="flex items-center jusitify-center px-5 py-2.5 font-medium tracking-wide text-gray-200 hover:text-gray-100 capitalize bg-[rgba(123,93,249,0.9)] hover:bg-[rgba(123,93,249,0.7)] focus:bg-[rgba(123,93,249,0.7)] dark:bg-[rgba(123,93,249,0.7)] rounded-md dark:hover:bg-[rgba(123,93,249,0.9)] focus:outline-none dark:focus:bg-[rgba(123,93,249,0.9)] transition duration-300 transform active:scale-95 ease-in-out"
                                    onClick={()=>{setState(false)}}
                                >
                                    <span className="pl-2 mx-1">Enregister</span>
                                </button>
                            </div>
                            <div className="flex-initial">
                                <button type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black dark:hover:text-red-600 capitalize rounded-md  bg-red-200 dark:bg-red-400 dark:hover:bg-red-300 fill-current text-red-600 dark:text-red-100  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                                    onClick={()=>{setState(false)}}
                                >
                                    <span class="pl-2 mx-1">Annuler</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default CustomersCreationForm
