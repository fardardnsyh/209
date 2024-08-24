import { useContext, useState, useEffect } from "react"
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { useDispatch, useSelector } from "react-redux";
import MobileIconLight from "../../assets/Mobilelogin-rafiki.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { SquarePen } from "lucide-react"
import { LoginPasswordValidators } from "../../utils/usefulFeatures";
import ErrorMessage from "../../components/ErrorMessage";
import { axiosInstance } from "../../config/axiosInstance";
import SuccessRequestModal from "../../components/modals/successRequestModal";
import ErrorRequestModal from "../../components/modals/ErrorRequestModal";

function ChangePassword() {

    const {token} = useParams();

    const darkMode = useSelector((state) => state.theme.value);

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/login")
    }

    const dispatch = useDispatch();

    const [isLoading, setIsloading] = useState(false)

    const [success, SetSuccess] = useState(false)
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        password1: "",
        password2: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});

    const onSubmit = (data) =>{
        setIsloading(true)
        const { password1, password2 } = data;

        axiosInstance
        .post("accounts/password/change/", {
            new_password1: `${password1}`,
            new_password2: `${password2}`,
            token: `${token}`,
        })
        .then(function (response) {

            console.log(response.status);
            if (response.status === 200) {

                SetSuccess(true)
                setTimeout(() => {
                    handleNavigate()
                }, 2000);
            }
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
                <div className="min-h-screen text-gray-900 flex justify-center w-[inherit]">
                    <SuccessRequestModal message={"Mot de passe mis à jour avec succès"} isSuccess={success} setSuccess={SetSuccess}/>
                    
                    <ErrorRequestModal message={"Error lors de l'envoi des données"} isError={error} setError={setError}/>
                    <div className="max-w-screen-xl m-0 sm:m-10 bg-[#fff] shadow sm:rounded-lg flex justify-center flex-1 overflow-hidden dark:bg-[#141625]">
                        <div className="lg:w-1/2 xl:w-5/12 p-5 sm:p-12">
                            <div className='flex items-center justify-center px-2 gap-[1em]'>
                                <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-12 h-12'/>
                                <div className='font-bold text-[1em] text-[black] leading-[1em] dark:text-white'>
                                    <h1>INVOICE</h1>
                                    <h1>MANAGER</h1>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col items-center">
                                <div className="w-full flex-1 mt-6">
                                    <div className="mx-auto max-w-xs">
                                        <div className="flex flex-col gap-[1.5em] items-center">
                                            <h1 className="text-[1.3em] font-semibold text-center dark:text-gray-100">Changer votre mot de passe</h1>
                                            <p className="text-center dark:text-gray-100">Veuillez saisir votre nouveau mot de passe et le confirmé.</p>

                                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                            
                                                <input
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300 mt-5"
                                                    type="password" placeholder="Password 1" name='password1' {...register(
                                                        "password1",
                                                        LoginPasswordValidators()
                                                    )}
                                                />

                                                <ErrorMessage message={errors.password ? errors.password.message: ""}/>

                                                <input
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300 mt-5"
                                                    type="password" placeholder="Password 2" name='password2' {...register(
                                                        "password2",
                                                        LoginPasswordValidators()
                                                    )}
                                                />

                                                <ErrorMessage message={errors.password ? errors.password.message: ""}/>

                                                <button
                                                disabled = {isLoading}
                                                type='submit'
                                                    className={isLoading ? "mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.5)] text-gray-100 w-full py-4 rounded-lg ease-in-out flex gap-[0.3em] items-center justify-center dark:bg-[rgba(123,93,249,0.4)]  dark:text-gray-950" :"mt-5 tracking-wide font-semibold bg-[rgba(123,93,249,0.9)] text-gray-100 w-full py-4 rounded-lg hover:bg-[rgba(123,93,249,1)] transition-all duration-300 ease-in-out flex gap-[0.3em] items-center justify-center focus:shadow-outline focus:outline-none dark:bg-[rgba(123,93,249,0.6)] dark:hover:bg-[rgba(123,93,249,0.5)] dark:text-gray-950"}>
                                                    <SquarePen size={"18"}/>
                                                    <span className="ml- text-gray-100 font-bold dark:text-gray-950">
                                                        Modifier
                                                    </span>
                                                </button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                            <div className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat `} style={darkMode?{ backgroundImage: `url(${MobileIconLight})` } : { backgroundImage: `url(${MobileIconLight})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ChangePassword
