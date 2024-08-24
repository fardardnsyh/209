import { axiosInstance } from "../../config/axiosInstance"
import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { CompanyFieldsValidators, ActivitiesValidators, LoginEmailValidators } from "../../utils/usefulFeatures";
import SuccessRequestModal from "./successRequestModal";
import ErrorRequestModal from "./ErrorRequestModal";
import { X, Trash2Icon, MinusIcon, PlusIcon } from "lucide-react"
import SelectMenu from "../iu/SelectMenu";
import { useParams } from 'react-router-dom';



function InvoicesModalForm({isDisplayed, setState, companies, setCompanies, customers}) {


    const { id_number } = useParams()

    const [isLoading, setIsloading] = useState(false)

    const [success, SetSuccess] = useState(false)
    const [error, setError] = useState(false)

    // const { register, control, handleSubmit } = useForm({
    //     defaultValues: {
    //       formArray: [{
    //         name: "",
    //         unity: "",
    //         quantity: "",
    //         unit_price: "",
    //         total: "",
    //         details: "",
    //       }]
    //     }
    //   });
    //   const { fields, append, remove } = useFieldArray({
    //     control,
    //     name: 'formArray'
    //   });


    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     adress: "",
    //     services: ""
    // })

    // const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});
    const [selectedClient, setSelectedClient] = useState(null); // État pour stocker le client sélectionné

    const handleClientChange = (client) => {
        setSelectedClient(client);
    };

    const { register, control, handleSubmit, watch, setValue, getValues, reset } = useForm({
        defaultValues: {
          concern: '',
          customer: '',
          total: '',
          articles: [{ name: "", unity: "", quantity: "0", unit_price: "0.00", total: "", details: ""}]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'articles'
    });

    // console.log(fields);

    const articles  = watch('articles')

    // console.log(articles);

    useEffect(() => {
        const calculateAmounts = () => {
          const values = getValues();
          let totalAmount = 0;
          articles.forEach((article, index) => {
            const quantity = parseInt(article.quantity);
            const unitPrice = parseFloat(article.unit_price);

            if (!isNaN(quantity) && !isNaN(unitPrice)) {
                const amount = quantity * unitPrice;
                totalAmount += amount;
                setValue(`articles[${index}].total`, amount.toFixed(2));
            }
          });
          setValue('total', totalAmount.toFixed(2));
        };
    
        calculateAmounts();
    }, [articles, fields]);

    // const articles = watch('articles');

    // const getTotalAmount = () => {
    //     const articles = watch('articles');
    //     articles.forEach(article => {
    //       const price = parseFloat(article.unit_price) * parseInt(article.quantity);
    //     });
    //     return totalPrice.toFixed(2);
    //   };

    // console.log(articles);

    // const getTotalPrice = () => {
    //     const articles = watch('articles');
    //     return articles.reduce((total, article) => {
    //       const price = parseFloat(article.unit_price) * parseInt(article.quantity);
    //       return total + price;
    //     }, 0).toFixed(2);
    // };

    // const calculateAmounts = (articles) => {
    //     return articles.map(article => {
    //       const quantity = parseFloat(article.quantity);
    //       const unit_price = parseFloat(article.unit_price);
    //       const amount = quantity * unit_price;
    //       return { ...article, amount: amount.toFixed(2) }; // Fixe le nombre de décimales à 2
    //     });
    // };
      
    // Fonction pour calculer le general_total
    // const calculateGeneralTotal = (articles) => {
    // return articles.reduce((total, article) => {
    //     return total + parseFloat(article.amount);
    // }, 0).toFixed(2); // Fixe le nombre de décimales à 2
    // };

    // console.log(calculateAmounts(articles));
    // console.log(calculateGeneralTotal(articles));


    const onSubmit = (data) =>{
        const clientName = selectedClient ? selectedClient.id_number : '';
        const formData = {
            ...data,
            customer: clientName,
            company: id_number
          };
        console.log(formData);
        setState(false)
        // setIsloading(true)
        // const { name, email, phone, adress, services } = data;

        axiosInstance
        .post("company/add_invoices/", formData)
        .then(function (response) {
            // console.log(response);
            SetSuccess(true)
            setError(false);
            // const newDatas = [...companies]
            // newDatas.push(response.data)
            // setCompanies(newDatas)

        })
        .catch(function (error) {
            // console.log(error);
            setError(true)
            SetSuccess(false)
        });
        reset();
        setIsloading(false)
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

                <section className="lg:w-[50em] md:w-[45em] lg:h-[40em] md:h-[35em] h-[32em] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-[#141625] generalScrollbar overflow-y-auto relative">
                    <button className="absolute top-2 right-2 dark:text-gray-200" onClick={()=>{setState(false)}}>
                        <X />
                    </button>
                    <h1 className="text-xl font-bold capitalize text-gray-900 dark:text-gray-200">Nouvelle Facture</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <h6 className="font-bold text-gray-900 dark:text-gray-200 mt-5 text-[1.1em]">Facture</h6>
                        <div className="grid grid-cols-1 gap-2 sm:gap-2 mt-2 sm:grid-cols-12">
                            <div className="col-span-1 sm:col-span-5">
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="name">Concerne</label>
                                <input id="name" type="text" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                    {...register('concern', {required: true})}
                                />
                            </div>

                            <div className="col-span-1 sm:col-span-4">
                                {/* <label className="text-gray-900 dark:text-gray-200 font-medium" for="emailAddress">Client</label> */}
                                <SelectMenu customerList={customers} onChange={handleClientChange}/>
                                <input {...register('client', { required: false })} type="hidden" value={selectedClient?.id_number} />
                            </div>

                            <div className="col-span-1 sm:col-span-3">
                                <label className="text-gray-900 dark:text-gray-200 font-medium" for="name">Total</label>
                                <input id="name" type="number" step= "0.01" className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                    {...register('total', {required: true})}
                                    readOnly
                                />
                            </div>

                        </div>

                        <h6 className="font-bold text-gray-900 dark:text-gray-200 mt-8 sm:mt-8 text-[1.1em]">Articles</h6>
                        <div className="w-full mt-2">
                            <div className="flex items-center">
                                <ul className="w-full grid grid-cols-4 sm:grid-cols-12 gap-[0.3em] dark:text-gray-200 ">
                                    <li className="col-span-4 text-left hidden sm:block">
                                        Item
                                    </li>
                                    <li className="col-span-2 text-left hidden sm:block">
                                        Quantité
                                    </li>
                                    <li className="col-span-2 text-left hidden sm:block">
                                        Unité
                                    </li>
                                    <li className="col-span-2 text-left hidden sm:block">
                                        Prix
                                    </li>
                                    <li className="col-span-2 text-left hidden sm:block">
                                        Montant
                                    </li>
                                    {/* <li className="col-span-12 "></li> */}
                                </ul>
                                <span className="w-[1.5em] ml-2"></span>
                            </div>
                            <div className="flex flex-col gap-[1.5em] sm:gap-[1em]">
                                {
                                    fields.map((field, index) =>(
                                        <div key={field.id}>
                                            <div className="flex items-center">
                                                <ul className="w-full grid grid-cols-4 sm:grid-cols-12 gap-[0.3em]">
                                                    <li className="col-span-4">
                                                        <label htmlFor="" className="block sm:hidden text-gray-900 dark:text-gray-200">Item</label>
                                                        <input type="text" 
                                                            className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                            {...register(`articles.${index}.name`, {required: true})}
                                                        />
                                                    </li>
                                                    <li className="col-span-2">
                                                        <label htmlFor="" className="block sm:hidden text-gray-900 dark:text-gray-200">Qty</label>
                                                        <input type="number" step="1" 
                                                            className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                            {...register(`articles.${index}.quantity`, {required: true})}
                                                        />
                                                    </li>
                                                    <li className="col-span-2">
                                                        <label htmlFor="" className="block sm:hidden text-gray-900 dark:text-gray-200">unt</label>
                                                        <input type="text" 
                                                            className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                            {...register(`articles.${index}.unity`, {required: true})}
                                                        />
                                                    </li>
                                                    <li className="col-span-2">
                                                        <label htmlFor="" className="block sm:hidden text-gray-900 dark:text-gray-200">Prix</label>
                                                        <input type="number" step={"0.01"} 
                                                            className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                            {...register(`articles.${index}.unit_price`, {required: true})}
                                                        />
                                                    </li>
                                                    <li className="col-span-2">
                                                    <label htmlFor="" className="block sm:hidden text-gray-900 dark:text-gray-200">Mnt</label>
                                                        <input type="number" step={"0.01"} 
                                                            className="block w-full px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                            {...register(`articles.${index}.total`, {required: true})}
                                                            readOnly
                                                        />
                                                    </li>
                                                    {/* <li className="col-span-12 "></li> */}
                                                </ul>
                                                <div className="w-[1.5em] ml-2">
                                                    <button type="button" className="text-gray-600 dark:text-gray-300"  onClick={() => remove(index)}>
                                                        <Trash2Icon strokeWidth={"2px"}/>
                                                    </button>
                                                </div>

                                            </div>
                                            <div className="mt-2 pr-[2em]">
                                                <input type="text" placeholder="Ajoutez une decritprion..." 
                                                    className=" w-full block px-4 py-[0.85em] text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-[#1e213b] dark:text-gray-200 dark:border-gray-600 focus:border-[rgba(123,93,249,0.5)] dark:focus:border-[rgba(123,93,249,0.7)] focus:outline-none mt-1 text-sm leading-5"
                                                    {...register(`articles.${index}.details`, {required: true})}
                                                />
                                            </div>
                                        </div>
                                    ))    
                                }
                            </div>                           

                            <div>
                                <div className="flex justify-end mb-[1em] mt-[1.5em] gap-3">
                                    {/* <button className="dark:text-gray-300 dark:bg-red-600 rounded-full p-[0.2em]" type="button">
                                        <MinusIcon strokeWidth={3}/>
                                    </button> */}
                                    <button className="dark:text-gray-300 bg-[rgba(123,93,249,1)] dark:bg-[rgba(123,93,249,0.8)] p-[0.2em] rounded-full" onClick={() =>append({})} type="button">
                                        <PlusIcon strokeWidth={3}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row-reverse p-3 justify-center sm:justify-start">
                            <div class="flex-initial pl-3">
                                <button type="submit" className="flex items-center jusitify-center px-5 py-2.5 font-medium tracking-wide text-gray-200 hover:text-gray-100 capitalize bg-[rgba(123,93,249,0.9)] hover:bg-[rgba(123,93,249,0.7)] focus:bg-[rgba(123,93,249,0.7)] dark:bg-[rgba(123,93,249,0.7)] rounded-md dark:hover:bg-[rgba(123,93,249,0.9)] focus:outline-none dark:focus:bg-[rgba(123,93,249,0.9)] transition duration-300 transform active:scale-95 ease-in-out"
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

export default InvoicesModalForm
