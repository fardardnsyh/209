import "./invoice-header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import FormContext from "../../contexts/displayFormContext"


function ItemHeader({companyName, itemsNumber, itemsName}) {
    const { formState, setFormState } = useContext(FormContext);

    const handleDisplayForm = () =>{
        setFormState(true)
    }

    return (
        <>
            <div className="text-[#fff] flex items-center justify-between py-[3em] px-[1em]">
                <div className="invoices-titles">
                    <h1>{itemsName}</h1>
                    <p>{companyName} possède {itemsNumber} {itemsName}</p>
                </div>
                <div className="new-invoice">
                    <div className="filter">
                        <h4>Filter by status</h4>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <div className="new-invoice-button">
                        <button onClick={handleDisplayForm} className="bg-[#7b5df9] py-[0.4em] px-[0.5em] rounded-full">Nouvelle Facture</button>
                        {/* <Link to={"#"} onClick={handleDisplayForm}>
                            <i className="fa-solid fa-plus"></i>
                            <h4>New invoice</h4>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemHeader