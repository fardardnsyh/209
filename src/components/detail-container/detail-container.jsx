import PriceDetails from '../price-detail/price-detail'
import { useContext, useParams } from 'react'
import ThemeContext from '../../contexts/themesContext'
import imLogo from "../../assets/new-im-logo-white.png"
import imLogoBlack from "../../assets/new-im-logo-black.png"
import { useSelector } from 'react-redux'

function DetailContainer() {

    const darkMode = useSelector((state) => state.theme.value);

    return (
      <>        
        <div className="bg-white dark:bg-[#141625] rounded-md shadow-md">
            <div className='flex items-center justify-between py-[1em] px-[1.5em] sm:flex-row flex-col gap-[1em]'>
                <div className='flex items-center gap-[1em] sm:justify-start justify-center'>
                    <img src={ darkMode?imLogo:imLogoBlack } alt="invoice manager logo" className='w-12 h-12'/>
                    <div className='font-bold text-[1em] text-[black] leading-[1em] dark:text-white'>
                        <h1>INVOICE</h1>
                        <h1>MANAGER</h1>
                    </div>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-100">19 Union Terrace<br />London E1 3EZ<br />United Kingdom</p>
                </div>
            </div>

            
            <div className="flex items-center sm:justify-between justify-center sm:flex-row flex-col gap-[1em] px-[1.5em] mt-[2em] text-gray-700 dark:text-gray-100">
                <div className="">
                    <h2 className='font-bold'>Kadea sofware</h2>
                    <p>kadea@gmail.com</p>
                </div>
                <p className="">19 Union Terrace<br />London E1 3EZ<br />United Kingdom</p>
            </div>

            <div className='flex items-center sm:justify-between justify-center sm:flex-row flex-col gap-[1em] px-[1.5em] mt-[2em] text-gray-700 dark:text-gray-100'>
                <div className="">
                    <h2 className='font-bold'>#RT3080</h2>
                    <p>Graphic Design</p>
                </div>
                <div>
                    <p>Date de création</p>
                    <h4>21 Aug 2024</h4>
                </div>
                <div>
                    <p>Date de payement</p>
                    <h4>21 Aug 2024</h4>
                </div>
            </div>

            <PriceDetails/>

        </div>
      </>
    )
  }
  
  export default DetailContainer