import "../../invoice/invoice.css"
import { Link } from "react-router-dom"

function Customer() {
    return (
        <>
            <div className="invoice-container">
                <ul>
                    <li><h4>#1</h4></li>
                    <li><p>Kadea Academy</p></li>
                    <li><p>Jensen Huang</p></li>
                    <li><h3>$50000</h3></li>
                    <li className="badge-container">
                        <div className="badge">
                            <div className="badge-point"></div>
                            <h5>Pending</h5>
                        </div>
                        <Link to={'/invoice/:id'}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Customer