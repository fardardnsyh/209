import { NavLink } from 'react-router-dom';
// import Loader from '../common/Loader';
// import { useEffect, useState } from 'react';
// import imLogo from "../assets/im-logo2.png"
import HomeIcon from '../icon/HomeIcon';
import ChartIcon from '../icon/ChartIcon';
import ComponentIcon from '../icon/ComponentIcon';
import SimpleUserTwoIcon from '../icon/SimpleUser2';

function Sidebar({user_type}) {
    return (
        <>
            <div className='bg-[#fff] flex-shrink-0 hidden w-64 border-r dark:border-r-[rgba(123,93,249,0.7)] md:block dark:bg-[#141625]'>{/* #141625 dark*/}
                <div className='flex flex-col h-full'>
                    <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                        {
                           user_type === "administrator" && 
                           <>
                                <div className={`${user_type !== "administrator" && "hidden"}`}>
                                    <NavLink to={"/home"}  className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}> {/*bg-[rgba(123,93,249,0.7)]  text-gray-100 dark*/}
                                        <span><HomeIcon/></span>
                                        <span>Accueil</span>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink  to={"/statitics"} className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}>
                                        <span><ChartIcon/></span>
                                        <span>Statistiques</span>
                                    </NavLink>
                                </div>
                           </>
                        }

                        <div>
                            <NavLink  to={"/company-list"} className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}>
                                <span><ComponentIcon/></span>
                                <span>Compagnies</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink  to={"/profile"} className={({ isActive }) =>isActive ? "bg-[rgba(123,93,249,0.5)] dark:bg-[rgba(123,93,249,0.7)] dark:text-gray-100 rounded-md flex items-center gap-2 mt-[0.7em] text-light p-2 text-gray-900" : " p-2 flex items-center gap-2 mt-[0.7em] text-light text-gray-900 dark:text-gray-100 hover:bg-[rgba(123,93,249,0.5)] dark:hover:bg-[rgba(123,93,249,0.7)] rounded-md"}>
                                <span><SimpleUserTwoIcon/></span>
                                <span>Profile</span>
                            </NavLink>
                        </div>
                        {/* <div>
                            <div className='px-[1em] text-[rgba(255,255,255,0.7)] flex items-center justify-between mt-[2em] mb-[0.6em]'>
                                <h3>COMPAGNIES</h3>
                                <button><i class="fas fa-plus"></i></button>
                            </div>
                            <NavLink to={"/company"} className={({ isActive }) =>isActive ? "text-[#fff] bg-[#7b5df9] rounded-[0_20px_20px_0] pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold" : "pl-[1em] py-[0.5em] flex items-center gap-2 mt-[0.7em] font-semibold text-[rgba(255,255,255,0.7)]"}>
                                Kadea
                            </NavLink>
                        </div> */}
                    </nav> 
                </div>
            </div> 
        </> 
    )
}

export default Sidebar
