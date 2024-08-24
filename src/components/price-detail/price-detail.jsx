import "./price-detail.css"
import PriceComponenent from "../price-component/price-component"

function PriceDetails() {

    const list = [1,2,3,4,5,6,7,8,9]

    return (
      <>
        <div className="overflow-x-scroll sm:overflow-x-hidden">
            <div className="sm:w-[inherit] w-[40em]">
                <div className="dark:bg-[#2d314e] dark:text-gray-200 rounded-md bg-[#f5f6fc] mt-[2em] py-[0.5em]">
                    <div className="price-detail-header">
                        <PriceComponenent name={"Items Name"} quantity={"Quantity"} price={"Price"} total={"Total"} style={"text-black dark:text-gray-100"}/>
                    </div>
                    <div className="price-container">
                        {
                            list.map((priceInfo,index) =>(
                                <PriceComponenent name={"Banner Design"} quantity={"1"} price={"$185"} total={"$225"} style={"text-black dark:text-gray-100 font-light"} key={index}/>
                            ))
                        }
                    </div>
                </div>
                <div className="bg-[#0b0e16] text-[1em] font-semibold flex justify-between items-center px-[2em] py-[1em] rounded-[0_0_8px_8px] text-white">
                    <p>Total Due</p>
                    <h2>$556</h2>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default PriceDetails