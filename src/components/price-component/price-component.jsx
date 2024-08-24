import "./price-component.css"

function PriceComponenent({name, quantity, price, total, style}) {

    return (
      <>
        <div className={"px-[1.5em]" + ` ${style}`}>
            <div className="grid grid-cols-[repeat(2,1fr)] pr-[0.5em]">
                <p>{name}</p>
                <div className="grid grid-cols-[repeat(3,1fr)] text-right">
                    <p>{quantity}</p>
                    <p>{price}</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
      </>
    )
}
  
export default PriceComponenent