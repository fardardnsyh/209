import "./invoice-form.css"
import "../invoice-actions/invoice-actions.css"
import { useContext, useState } from "react"
import FormContext from "../../contexts/displayFormContext"

function InvoiceForm() {

    const { formState, setFormState } = useContext(FormContext);

    const [inputGroups, setInputGroups] = useState([
        { id: 1, input1: '', input2: '', input3: '' }
    ]);

    const handleHideForm = () =>{
        setFormState(false)
    }

    const addInputGroup = () => {
        const newId = inputGroups.length > 0 ? inputGroups[inputGroups.length - 1].id + 1 : 1;
        setInputGroups([...inputGroups, { id: newId, input1: '', input2: '', input3: '' }]);
    };
    
    const removeInputGroup = (id) => {
        setInputGroups(inputGroups.filter(group => group.id !== id));
    };
    
    const updateInput = (id, key, value) => {
        const newInputGroups = inputGroups.map(group => {
          if (group.id === id) {
            return { ...group, [key]: value };
          }
          return group;
        });
        setInputGroups(newInputGroups);
    };


    return (
        <>
            <div className="invoice-form">
                <h2>New Invoice</h2>
                <div className="adresses-container">
                    <h5>Bill From</h5>
                    <div className="street">
                        <label htmlFor="street">Street Adress</label>
                        <input type="text" name="street" id="street"/>
                    </div>

                    <div className="city-container">
                        <div>
                            <label htmlFor="street">City</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                        <div>
                            <label htmlFor="street">Post Code</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                        <div>
                            <label htmlFor="street">Country</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                    </div>
                </div>

                <div className="client-container">
                    <h5>Bill To</h5>
                    <div>
                        <label htmlFor="street">Client's Name</label>
                        <input type="text" name="street" id="street"/>
                    </div>

                    <div>
                        <label htmlFor="street">Client's Email</label>
                        <input type="text" name="street" id="street"/>
                    </div>

                    <div>
                        <label htmlFor="street">Street Adress</label>
                        <input type="text" name="street" id="street"/>
                    </div>

                    <div className="city-container">
                        <div>
                            <label htmlFor="street">City</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                        <div>
                            <label htmlFor="street">Post Code</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                        <div>
                            <label htmlFor="street">Country</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                    </div>
                </div>

                <div className="date-container">
                    <div className="dates">
                        <div>
                            <label htmlFor="street">Invoice Date</label>
                            <input type="date" name="street" id="street"/>
                        </div>
                        <div>
                            <label htmlFor="street">Payments Terms</label>
                            <input type="text" name="street" id="street"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="street">Project's Description</label>
                        <input type="text" name="street" id="street"/>
                    </div>
                </div>

                <div className="item-list">
                    <h3>Item List</h3>
                    <div className="item-list-header">
                        <label htmlFor="#" className="item-one">Item Name</label>
                        <label htmlFor="#" className="item-two">Qty.</label>
                        <label htmlFor="#" className="item-three">Price</label>
                        <label htmlFor="#" className="item-four">Total</label>
                    </div>

                    {
                        inputGroups.map(group =>(
                            <div className="item" key={group.id}>
                                <div className="item-one">
                                    <input
                                        type="text"
                                        value={group.input1}
                                        onChange={(e) => updateInput(group.id, 'input1', e.target.value)}
                                    />
                                </div>
                                <div className="item-two">
                                    <input
                                        type="text"
                                        value={group.input2}
                                        onChange={(e) => updateInput(group.id, 'input2', e.target.value)}
                                    />
                                </div>
                                <div className="item-three">
                                    <input
                                        type="text"
                                        value={group.input3}
                                        onChange={(e) => updateInput(group.id, 'input3', e.target.value)}
                                    />
                                </div>
                                <div className="item-four">
                                    <input
                                        type="text"
                                        value={group.input3}
                                        onChange={(e) => updateInput(group.id, 'input4', e.target.value)}
                                    />
                                </div>
                                <div className="item-five trash">
                                    <i class="fa-solid fa-trash" onClick={() => removeInputGroup(group.id)}></i>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="form-actions">
                    <button className="btn-blue" onClick={addInputGroup}><i className="fa-solid fa-plus"></i> Add New Item</button>
                    <div className="save-container">
                        <button className="btn-white" onClick={handleHideForm}>Cancel</button>
                        <button className="btn-violet" type="submit">Save Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceForm