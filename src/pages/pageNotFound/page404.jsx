import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slice/ThemeSlice";
import InvoiceMoonIcon from "../../icon/InvoiceMoonIcon"
import InvoiceSunIcon from "../../icon/InvoiceSunicon"
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { Link } from "react-router-dom";

function PageNotFound() {

    const darkMode = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`${darkMode && "dark"} w-full`}>
                <div className="min-h-screen flex-col flex justify-center items-center w-[inherit] dark:bg-[#1e213b] gap-[5em]">
                    <div className='flex items-center justify-center px-2 gap-[1em]'>
                        <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-20 h-20'/>
                        <div className='font-bold text-[2em] text-[black] leading-[1em] dark:text-white'>
                            <h1>INVOICE</h1>
                            <h1>MANAGER</h1>
                        </div>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
                            <p className="font-semibold text-red-700 text-9xl dark:text-red-600">404</p>
                            <div className="space-y-2">
                            <h1 id="pageTitle" className="flex items-center space-x-2">
                                <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-red-700 dark:text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                                </svg>
                                <span class="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                                Oops! Page Introuvable.
                                </span>
                            </h1>
                            <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                                La page que vous cherchez n'existe pas.
                            </p>
                            <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                                Vous pouvez retourner à la 
                                <Link to={"/home"} className="text-blue-600 hover:underline dark:text-blue-500"> page d'acceuil</Link>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-5 left-5">
                <button className="bg-[#7b5df9] p-[0.5em] rounded-full text-white" onClick={() => {dispatch(setTheme(!darkMode))}}>
                    {
                        darkMode ?
                        <InvoiceMoonIcon/>
                        :<InvoiceSunIcon/>
                    }
                    </button>
                </div>

            </div>
        </>
    )
}

export default PageNotFound
