/* eslint-disable react/prop-types */


const OrderSCard= (props) =>{
   const { date , totalProducts , totalPrice } = props
    
    return(
        <div className="flex justify-between items-center p-4 border w-full border-black rounded-lg mb-4">
         <div className="flex justify-between">
            <p className=" flex flex-col">
        <span className="font-light" > Date:{date}</span>
        <span className="font-light" >  Total products : {totalProducts}</span>
            </p>
            <p className=" flex items-center relative">
        <span className="font-medium text-2xl px-6 "> ${totalPrice}  </span>
        <span className="font-sm absolute ml-2 right-0"> ⇉ </span>
        </p>
        </div>
        </div>
    )
}

export default OrderSCard