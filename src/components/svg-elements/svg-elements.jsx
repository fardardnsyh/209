import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import chart from "../../assets/dallee.webp"
import imLogog from "../../assets/im-logo.png"
import userIcon from "../../assets/user-icon.webp"
import userLogo from "../../assets/user-128.svg"

function Login() {

    const inputStyles = 'border-2 border-solid border-[#7b5df9] w-full rounded-full'

    return (
        <>
            <div className='h-screen flex items-center justify-center gradient'>
                <div className='w-3/4 h-5/6 rounded-md grid grid-cols-12 overflow-hidden drop-shadow-md'>
                    <div className='bg-[#fff] h-full col-[1_/_6] px-10 pt-5'>
                        <div className='flex items-center justify-center'>
                            <img src={imLogog} alt="invoice manager logo" className='w-14 h-14'/>
                            <h1 className='font-black w-20'>INVOICE MANAGER</h1>
                        </div>
                        <div className='flex justify-center'>
                            <img src={userIcon} alt="user logo" className='w-20'/>
                        </div>
                        <div className='text-center'>
                            <input className={inputStyles} type="text" />
                        </div>
                        <div className=''>
                            <input className={inputStyles} type="text" />
                        </div>
                    </div>
                    <div className='h-full grid col-[6_/_13] bg-[url("src/assets/dallee5.webp")] bg-contain'></div>
                </div>
            </div>
        </>
    )
}

export default Login
