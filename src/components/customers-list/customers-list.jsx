import Customer from "./customer/customer"
import ItemHeader from "../items-header/items-header"

function CustomersList({companyName, itemsName, itemsNumber}) {

    const list = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>

            <ItemHeader companyName={companyName} itemsNumber={itemsNumber} itemsName={itemsName}/>

            <div className="flex flex-col gap-[1em] px-[1em]">
                {
                    list.map((invoiceInfos, index) =>(
                        <Customer key={index} />
                    ))
                }
                <div className="text-[#fff] flex justify-end items-center gap-[1em]">
                    <button className="bg-[#1e213b] py-[0.5em] px-[0.8em] rounded-[5px] hover:border-2 hover:border-solid hover:border-[#7b5df9]">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button className="py-[0.5em] px-[0.8em] bg-[#7b5df9] rounded-[5px] hover:border-2 hover:border-solid hover:border-[#7b5df9]">1</button>
                    <button className="bg-[#1e213b] py-[0.5em] px-[0.8em] rounded-[5px] hover:border-2 hover:border-solid hover:border-[#7b5df9]">2</button>
                    <button className="bg-[#1e213b] py-[0.5em] px-[0.8em] rounded-[5px] hover:border-2 hover:border-solid hover:border-[#7b5df9]">3</button>
                    <button className="bg-[#1e213b] py-[0.5em] px-[0.8em] rounded-[5px] hover:border-2 hover:border-solid hover:border-[#7b5df9]"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default CustomersList