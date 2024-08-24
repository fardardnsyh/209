import "./invoice-actions.css"
import { useContext } from "react"
import FormContext from "../../contexts/displayFormContext"

function InvoiceActions() {

    // const { isEditForm, setIsEditForm } = useContext(FormContext)

    // const handleDisplayEditForm = () =>{
    //     setIsEditForm(true)
    // }

    return (
      <>
        <div className="detail-header">
            <div className="actions">
                <div className="statut">
                    <p>Statue</p>
                    <div className="badge">
                        <div className="badge-point"></div>
                        <h5>Pending</h5>
                    </div>
                </div>
                <div className="button-actions">
                    <button className="btn-white">Edit</button>
                    <button className="btn-red">Delete</button>
                    <button className="btn-violet">Mark as Paid</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default InvoiceActions