import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import CheckCircleIcon from "../../icon/CheckCircle"
import { useDispatch, useSelector } from "react-redux";
import { CircleArrowLeft } from "lucide-react"
import SendMailDark from "../../assets/SentMessage-bro.png"
import SendMailLight from "../../assets/SentMessage-bro.png"

function EmailPasswordConfirm() {

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/login")
    }

    const darkMode = useSelector((state) => state.theme.value);

    const emailToSend = sessionStorage.getItem('emailToSend');
    console.log(emailToSend);

    return (
        <>
            <div className={`${darkMode && "dark"} w-full`}>
                <div className="min-h-screen text-gray-900 flex justify-center w-[inherit] dark:bg-[#1e213b]">

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
                                        <div className="flex flex-col gap-[1em] items-center">
                                            <h1 className="text-[1.3em] font-semibold text-center dark:text-gray-100">Reini</h1>
                                            <p className="text-center dark:text-gray-100">Un email de confirmation a été envoyé à l'adrèsse <span className="font-medium dark:text-gray-100">{emailToSend}</span>.</p>
                                            <button
                                                // type="submit"
                                                className="flex items-center gap-[0.3em] text-gray-100 bg-[rgba(123,93,249,0.9)] p-[0.5em] rounded-md font-semibold mt-[1em]"
                                                // onClick={handleSubmit(onSubmit)}
                                                onClick={handleNavigate}
                                            >
                                                <CircleArrowLeft size={"19"}/>
                                                Connexion
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[rgba(123,93,249,0.5)] text-center hidden lg:flex">
                            <div className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat `} style={darkMode?{ backgroundImage: `url(${SendMailDark})` } : { backgroundImage: `url(${SendMailLight})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailPasswordConfirm
