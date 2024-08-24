import "./invoice-detail.css"
import { Link } from "react-router-dom"
import DetailContainer from "../../components/detail-container/detail-container"
import DownloadIcon from "../../icon/DownloadIcon"
import InvoiceMoonIcon from "../../icon/InvoiceMoonIcon"
import { useContext, useEffect, useRef, useState } from "react"
import InvoiceSunIcon from "../../icon/InvoiceSunicon"
import jsPDF from 'jspdf';
import { usePDF } from 'react-to-pdf';
import { useSelector, useDispatch } from "react-redux"
import { setTheme } from "../../redux/slice/ThemeSlice"
import { axiosInstance } from "../../config/axiosInstance"
import { useParams } from "react-router-dom"

function InvoiceDetail() {

  const { id_number } = useParams()

  const darkMode = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  const [invoice, setInvoice] = useState([])

  useEffect(() => {

    axiosInstance
      .get(`company/get_invoice/${id_number}/`)

      .then(function (response) {
        setInvoice({...response.data});
      })

      .catch(function (error) {
    });
  }, [])

  console.log(invoice);

  // const divRef = useRef(null);

  // const downloadPdf = () => {
  //   const doc = new jsPDF();

  //   doc.html(divRef.current, {
  //     callback: function (pdf) {
  //       pdf.save('my-pdf.pdf');
  //     }
  //   });
  // }

  const { toPDF, targetRef } = usePDF({filename: 'Invoice.pdf'});

  return (
    <>
      <div className={`${darkMode && "dark"} w-full`}>
        <div className="w-full flex justify-center flex-col items-center overflow-hidden">
          <div className="w-[45em]">
            <div className="flex items-center justify-between my-[2em]">
              <Link to={"/home"} className="flex items-center dark:text-gray-200 text-[1.2em] gap-[0.3em] font-semibold">
                <i className="fa-solid fa-chevron-left"></i>
                <h4>Go back</h4>
              </Link>
              <button className="dark:text-gray-200" onClick={() => toPDF()}>
                <DownloadIcon/>
              </button>
            </div>

            <div ref={targetRef}>
              <DetailContainer/>
            </div>
          </div>
          <div className="my-[3em] w-full pl-[3em]">
            <button className="bg-[#7b5df9] p-[0.5em] rounded-full text-white" onClick={() => {dispatch(setTheme(!darkMode))}}>
            {
              darkMode ?
              <InvoiceMoonIcon/>
              :<InvoiceSunIcon/>
            }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceDetail