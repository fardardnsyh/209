import { CSSTransition } from 'react-transition-group';
import { useContext } from 'react';
import SearchPanelContext from '../contexts/searchpanelContext';
import CloseIcon from '../icon/CloseIcon';
import SearchMiniIcon from '../icon/SearchMiniIcon';
import FormsIcon from '../icon/Forms';
import { Link } from 'react-router-dom';

function SearchPanel() {

    const{ isSearchPanleMenu, setIsSearchPanleMenu } = useContext(SearchPanelContext)

    return (
    <>
        <div
            onClick={()=>{setIsSearchPanleMenu(false)}}
            class={"fixed inset-0 z-10 bg-[#7b5df9] opacity-50" + ` ${!isSearchPanleMenu && "hidden"}`}
        ></div>
        {/* panel */}
        <CSSTransition
            in={isSearchPanleMenu}
            timeout={500}
            classNames={{
                enter: 'translate-x-full',
                enterActive: 'translate-x-1',
                exit: 'translate-x-0',
                exitActive: '-translate-x-full',
            }}
            unmountOnExit
        >
            <section
                className="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-[#141625] dark:text-light sm:max-w-md focus:outline-none transition-all"
            >
                <div className="absolute right-0 p-2 transform translate-x-full transition-all">
                    {/* <!-- Close button --> */}
                    <button className="p-2 text-white rounded-md focus:outline-none focus:ring" onClick={()=>{setIsSearchPanleMenu(false)}}>
                    <CloseIcon/>
                    </button>
                </div>

                <h2 className="sr-only">Search panel</h2>
                <div className="flex flex-col h-screen">
                    <div
                    class="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700"
                    >
                        <span class="absolute inset-y-0 inline-flex items-center px-4">
                            <SearchMiniIcon/>
                        </span>
                        <input
                            type="text"
                            className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-[#1e213b] dark:border-transparent dark:text-gray-300 dark:text-light focus:outline-none focus:ring"
                            placeholder="Search..."
                        />
                    </div>

                    <div class="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
                        <h3 class="py-2 text-sm font-semibold dark:text-gray-100 text-gray-900 dark:text-light">Factures</h3>
                        <Link to={"#"} className="flex space-x-4">
                            <div class="flex-shrink-0 text-black dark:text-white pt-[0.3em]">
                                <i className="fas fa-file-invoice text-[0.9em] dark:text-gray-100 text-[1.2em]"></i>
                            </div>
                            <div class="flex-1 max-w-xs overflow-hidden">
                                <h4 class="text-sm font-semibold dark:text-gray-300 dark:text-light text-gray-700">Kadea software</h4>
                                <p class="text-sm font-normal dark:text-gray-400 truncate dark:text-primary-lighter text-gray-500">
                                    Coulage de béton à la maison.
                                </p>
                                <span class="text-sm font-normal dark:text-gray-300 dark:text-primary-light text-gray-600"> Projet </span>
                            </div>
                        </Link>
                        <Link to={"#"} className="flex space-x-4">
                            <div class="flex-shrink-0 text-black dark:text-white pt-[0.3em]">
                                <i className="fas fa-file-invoice text-[0.9em] dark:text-gray-100 text-[1.2em]"></i>
                            </div>
                            <div class="flex-1 max-w-xs overflow-hidden">
                                <h4 class="text-sm font-semibold dark:text-gray-100 dark:text-light text-gray-900">Magali.com</h4>
                                <p class="text-sm font-normal dark:text-gray-400 text-gray-500 truncate dark:text-primary-lighter">
                                    Lavage des tauneaus d'or.
                                </p>
                                <span class="text-sm font-normal text-gray-400 dark:text-primary-light text-[#d86f2d]"> En attente </span>
                            </div>
                        </Link>
                        <Link to={"#"} className="flex space-x-4">
                            <div class="flex-shrink-0 text-black dark:text-white pt-[0.3em]">
                                <i className="fas fa-file-invoice text-[0.9em] dark:text-gray-100 text-[1.2em]"></i>
                            </div>
                            <div class="flex-1 max-w-xs overflow-hidden">
                                <h4 class="text-sm font-semibold dark:text-gray-300 dark:text-light text-gray-700">Kadea software</h4>
                                <p class="text-sm font-normal dark:text-gray-400 truncate dark:text-primary-lighter text-gray-500">
                                    Coulage de béton à la maison.
                                </p>
                                <span class="text-sm font-normal text-gray-300 dark:text-primary-light text-gray-600 text-[#00ffa9]"> Payée </span>
                            </div>
                        </Link>
                        <Link to={"#"} className="flex space-x-4">
                            <div class="flex-shrink-0 text-black dark:text-white pt-[0.3em]">
                                <i className="fas fa-file-invoice text-[0.9em] dark:text-gray-100 text-[1.2em]"></i>
                            </div>
                            <div class="flex-1 max-w-xs overflow-hidden">
                                <h4 class="text-sm font-semibold dark:text-gray-100 dark:text-light text-gray-900">Magali.com</h4>
                                <p class="text-sm font-normal dark:text-gray-400 text-gray-500 truncate dark:text-primary-lighter">
                                    Lavage des tauneaus d'or.
                                </p>
                                <span class="text-sm font-normal text-gray-400 dark:text-primary-light text-[#d86f2d]"> En attente </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </CSSTransition>
    </>
    )
  }
    
    export default SearchPanel
    