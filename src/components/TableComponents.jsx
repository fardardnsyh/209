import WatchIcon from "../icon/Watch"
import ArrowDownIcon from "../icon/ArrowDown"
import InputSearchIcon from "../icon/InputSearchIcon"
import { Link } from "react-router-dom"
import TrashIcon from "../icon/TrashIcon"
import ScanEyeIcon from "../icon/ScanEyeIcon"
import CheckPaidIcon from "../icon/CheckPaidIcon"
import CrossUnpaidIcon from "../icon/CrossUnpaidIcon"
import ChevronsLeftIcon from "../icon/ChevronsLeftIcon"
import ChevronsRightIcon from "../icon/ChevronsRight"
import ProfileSettingsIcon from "../icon/ProfileSettingsIcon"
import SheetIcon from "../icon/SheetIcon"
import ChevronDowncon from "../icon/ChevronDownIcon"
import SquarePencilIcon from "../icon/SquarePencilIcon"

function TableComponent() {

    const recentInvoicesNumber = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            <div className="flex start mt-[2em]">
                <div className="flex items-center gap-[1em] flex-col md:flex-row">
                    <div className="flex items-center gap-[1em] start w-full">
                        <button className="bg-white dark:bg-[#141625] flex items-center py-[0.3em] rounded-md px-[0.7em] gap-[0.7em] shadow-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200">
                            <span className="flex items-center"><SheetIcon/> Factures</span>
                            <ChevronDowncon/>
                        </button>
                        <button className="bg-white dark:bg-[#141625] rounded-md p-[0.5em] shadow-md dark:text-gray-300 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"><ProfileSettingsIcon/></button>
                    </div>
                    <div className="flex items-center gap-[1em]">
                        <input type="text" placeholder="Rechercher..." className="placeholder:text-red py-[0.3em] rounded-md px-[0.7em] shadow-md dark:bg-[#141625] dark:text-gray-200 outline-none"/>
                        <button className="bg-white dark:bg-[#141625] flex items-center py-[0.3em] rounded-md px-[0.7em] gap-[0.7em] shadow-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200">
                            <span className="flex items-center">Tout</span>
                            <ChevronDowncon/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mt-[2em] bg-white py-[1em] px-[0.7em] rounded-md dark:bg-[#141625] font-sans space-y-4 overflow-x-auto shadow-md">
                <div className="sm:w-full w-[100em] md:w-[100em] lg:w-[100em] xl:w-[inherit]">
                    <div className="p-[0.5em] dark:text-gray-100 mb-[0.5em]">
                        <ul className="grid grid-cols-[repeat(100,1fr)] text-[0.9em] font-bold">
                            <li className="col-[1_/_10]">#</li>
                            <li className="col-[10_/_30]">DATE</li>
                            <li className="col-[30_/_50]">CLIENT</li>
                            <li className="col-[50_/_70]">MONTANT</li>
                            <li className="col-[70_/_90]">STATUS</li>
                            <li className="col-[90_/_101]">ACTIONS</li>
                        </ul>
                    </div>
                    {
                        recentInvoicesNumber.map((invoiceInfos, index) =>(
                            <div className={`${(index % 2 === 0) && "bg-[#f5f6fc] dark:bg-[#1e213b]"} rounded-md p-[0.5em] dark:text-gray-100`}>
                                <ul className="grid grid-cols-[repeat(100,1fr)] text-[0.9em]">
                                    <li className="col-[1_/_10]"><h4>#RT3080</h4></li>
                                    <li className="col-[10_/_30]"><p>Due 24 Jan 2024</p></li>
                                    <li className="col-[30_/_50]"><p>Jensen Huang</p></li>
                                    <li className="col-[50_/_70]"><h3>$50000</h3></li>
                                    <li className="col-[70_/_90] flex">
                                        <div className="flex items-center gap-[0.3em] bg-[rgba(3,223,171,0.1)] px-[0.5em] py-[0.3em] rounded-md">
                                            <CheckPaidIcon/>
                                            <h5 className="font-bold text-[0.8em] text-[#07cc9e]">PENDING</h5>
                                        </div>
                                    </li>
                                    <li className="col-[90_/_101] flex items-center gap-[0.5em]">
                                        <button className="bg-[rgba(0,0,0,0.1)] p-[0.4em] rounded-md"><TrashIcon/></button>
                                        <Link to={"/invoice"} className="bg-[rgba(0,0,0,0.1)] p-[0.4em] rounded-md">
                                            <ScanEyeIcon/>                            
                                        </Link>
                                        <button className="bg-[rgba(0,0,0,0.1)] p-[0.4em] rounded-md"><SquarePencilIcon/></button>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 mb-[2em]">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                <ul class="inline-flex gap-[0.5em] -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <button className="flex items-center justify-center px-2 h-8 ms-0 leading-tight text-gray-500 rounded-lg hover:bg-[rgba(123,93,249,1)] hover:text-white dark:text-gray-400 dark:hover:text-white">
                            <ChevronsLeftIcon/>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-white rounded-lg hover:bg-[#7b5df9] bg-[#7b5df9] dark:bg-[#7b5df9] hover:text-white dark:text-white hover:text-white dark:hover:text-white">1</button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-lg hover:bg-[#7b5df9] hover:text-white hover:text-white dark:hover:text-white dark:text-gray-400 dark:hover:text-white">2</button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-lg hover:bg-[#7b5df9] hover:text-white hover:text-white dark:hover:text-white dark:text-gray-400 dark:hover:text-white">3</button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-lg hover:bg-[#7b5df9] hover:text-white hover:text-white dark:hover:text-white dark:text-gray-400 dark:hover:text-white">4</button>
                    </li>
                    <li>
                        <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 rounded-lg hover:bg-[#7b5df9] hover:text-white hover:text-white dark:hover:text-white dark:text-gray-400 dark:hover:text-white">5</button>
                    </li>
                    <li>
                        <button className="flex items-center  justify-center px-2 h-8 ms-0 leading-tight text-gray-500 rounded-lg hover:bg-[rgba(123,93,249,1)] hover:text-white dark:text-gray-400 dark:hover:text-white">
                            <ChevronsRightIcon/>
                        </button>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default TableComponent