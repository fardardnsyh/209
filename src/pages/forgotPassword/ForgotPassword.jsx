import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { useDispatch, useSelector } from "react-redux";
import forgotDark from "../../assets/Forgotpassword-bro.png"
import forgotLight from "../../assets/Forgotpassword-rafiki.png"
import { RefreshCw, ArrowBigLeftDash } from "lucide-react"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import SuccessRequestModal from "../../components/modals/successRequestModal";
import ErrorMessage from "../../components/ErrorMessage";
import { LoginEmailValidators } from "../../utils/usefulFeatures";

function ForgotPassword() {

    const darkMode = useSelector((state) => state.theme.value);

    const [success, SetSuccess] = useState(false)
    const [emailToSend, setEmail] = useState("")

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {register, handleSubmit, watch, formState:{errors}, reset} = useForm({defaultValues: formData});

    const onSubmit = (data) =>{
        const { email } = data;
        setEmail(email)
        axiosInstance
        .post("accounts/resend_email/", {
            email: `${email}`,
        })
        .then(function (response) {
            // sessionStorage.setItem('emailToSend', emailToSend);
            SetSuccess(true)
        })
        .catch(function (error) {
        });
    }

    useEffect(() => {
        if (success) {
          const timeout = setTimeout(() => {
            SetSuccess(false);
          }, 10000);
    
          return () => clearTimeout(timeout);
        }
    }, [success]);


    return (
        <>
            <div className={`${darkMode && "dark"} w-full`}>
                <div className="min-h-screen text-gray-900 flex justify-center w-[inherit] dark:bg-[#1e213b]">

                    <SuccessRequestModal message={"Email envoyé avec succes !"} isSuccess={success} setSuccess={SetSuccess}/>

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
                                            <h1 className="text-[1.3em] font-semibold text-center dark:text-gray-100">Vous avez oubliez votre mot de passe ?</h1>
                                            <p className="text-center dark:text-gray-100">Veuillez saisir votre adrèsse email pour confirmer votre identité.</p>

                                            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
                                                <input
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-[#fff] border border-[#1e213b] placeholder-gray-700 text-sm focus:outline-none focus:border-[#7b5df9] text-gray-700 dark:bg-[#141625] dark:text-gray-300 dark:border-[rgba(250,250,250,0.5)] dark:placeholder-gray-300"
                                                    type="email" placeholder="Email" name='email' {...register(
                                                        "email",
                                                        LoginEmailValidators()
                                                    )}
                                                />

                                                <ErrorMessage message={errors.email ? errors.email.message: ""}/>
                                                
                                                <div className="flex justify-center mt-2">
                                                    <button
                                                        type="submit"
                                                        className="flex items-center gap-[0.3em] text-gray-100 bg-[rgba(123,93,249,0.9)] p-[0.5em] rounded-md font-semibold mt-[1em]"
                                                        // onClick={handleSubmit(onSubmit)}
                                                        // onClick={handleNavigate}
                                                    >
                                                        <ArrowBigLeftDash size={"20"}/>
                                                        Envoyer
                                                    </button>
                                                </div>

                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                            <div className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat `} style={darkMode?{ backgroundImage: `url(${forgotDark})` } : { backgroundImage: `url(${forgotLight})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
