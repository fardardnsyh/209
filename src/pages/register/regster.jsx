import { Link, useNavigate } from "react-router-dom"
import ErrorMessage from "../../components/ErrorMessage"
import UserplusIcon from "../../icon/UserplusIcon"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { useDispatch, useSelector } from "react-redux";
import SuccessRequestModal from "../../components/modals/successRequestModal"
import ErrorRequestModal from "../../components/modals/ErrorRequestModal"
import { axiosInstance } from "../../config/axiosInstance"
import registerLight from "../../assets/Signup-rafiki.png"
import registerDark from "../../assets/Signup-bro.png"


function Register() {

    const darkMode = useSelector((state) => state.theme.value);

    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate("/email-confirm")
    }

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});

    const [isLoading, setIsloading] = useState(false)

    const [success, SetSuccess] = useState(false)
    const [error, setError] = useState(false)


    const onSubmit = (data) =>{
        setIsloading(true)
        const { first_name, last_name, email, password } = data;

        axiosInstance
        .post("accounts/register/", {
            first_name: `${first_name}`,
            last_name: `${last_name}`,
            email: `${email}`,
            password: `${password}`,
        })
        .then(function (response) {
            SetSuccess(true)
            setTimeout(() => {
                handleNavigate()
            }, 2000);
        })
        .catch(function (error) {
            setError(true)
        });
        reset();
        setIsloading(false)
    }

    useEffect(() => {
        if (error) {
          const timeout = setTimeout(() => {
            setError(false);
          }, 10000);
    
          return () => clearTimeout(timeout);
        }
    }, [error]);

    return (
        <>

            <div className={`${darkMode && "dark"} w-full`}>
                <div className="min-h-screen text-gray-900 flex justify-center w-[inherit] dark:bg-[#1e213b]">

                    <SuccessRequestModal message={"Vos informations ont été enregistrés avec succès. Redirection en cours..."} isSuccess={success} setSuccess={SetSuccess}/>
                    
                    <ErrorRequestModal message={"Une erreur s'est produite lors de l'envoi des données !"} isError={error} setError={setError}/>

                    <div className="max-w-screen-xl m-0 sm:m-10 bg-[#fff] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden dark:bg-[#141625]">
                        <div className="lg:w-1/2 xl:w-5/12 p-5 sm:p-12">
                            <div className='flex items-center justify-center px-2 gap-[1em]'>
                                <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-12 h-12'/>
                                <div className='font-bold text-[1em] text-[black] leading-[1em] dark:text-white'>
                                    <h1>INVOICE</h1>
                                    <h1>MANAGER</h1>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col items-center">
                                <div className="w-full flex-1 mt-6">
                
                                    <div className="mx-auto max-w-xs">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300"
                                                type="text" placeholder="Nom" name='first_name' {...register(
                                                    "first_name",
                                                    // LoginEmailValidators()
                                                )}
                                            />

                                            <ErrorMessage message={errors.email ? errors.email.message: ""}/>

                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300 mt-5"
                                                type="text" placeholder="Postnom" name='last_name' {...register(
                                                    "last_name",
                                                    // LoginPasswordValidators()
                                                )}
                                            />

                                            <ErrorMessage message={errors.password ? errors.password.message: ""}/>

                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300 mt-5"
                                                type="email" placeholder="Email" name='email' {...register(
                                                    "email",
                                                    // LoginPasswordValidators()
                                                )}
                                            />

                                            <ErrorMessage message={errors.password ? errors.password.message: ""}/>

                                            <input
                                                className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300 mt-5"
                                                type="password" placeholder="Mot de passe" name='password' {...register(
                                                    "password",
                                                    // LoginPasswordValidators()
                                                )}
                                            />

                                            <ErrorMessage message={errors.password ? errors.password.message: ""}/>

                                            <button
                                            disabled = {isLoading}
                                            type='submit'
                                                className={isLoading ? "mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.5)] text-gray-100 w-full py-4 rounded-lg ease-in-out flex gap-[0.5em] items-center justify-center dark:bg-[rgba(123,93,249,0.4)]  dark:text-gray-950" :"mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.9)] text-gray-100 w-full py-4 rounded-lg hover:bg-[rgba(123,93,249,1)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none dark:bg-[rgba(123,93,249,0.6)] dark:hover:bg-[rgba(123,93,249,0.5)] gap-[0.5em] dark:text-gray-950"}>
                                                <UserplusIcon/>
                                                <span className="ml- text-gray-100 font-bold dark:text-gray-950">
                                                    S'enregistrer
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                            <div className={'m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'} style={darkMode?{ backgroundImage: `url(${registerDark})` } : { backgroundImage: `url(${registerLight})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
