/* eslint-disable react/prop-types */
const OrderCard= product =>{
    console.log(product)
    const {id, title, image, price , removeToCart , quantity , addMore , removeToCartOneOfOne} = product
    return(
        <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2 pb-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={`${image}`} alt={`${title}`} />
                </figure>  
                <div className=" flex justify-around ">
                    <p className="cursor-pointer" onClick={()=>{removeToCartOneOfOne(id)}}> - </p>
                    <p> {quantity} </p>
                    <p className="cursor-pointer" onClick={()=>{addMore(id)}}> + </p>
                  </div>
                  <p className="text-sm font-light">{title}</p>
                  
            </div>
           
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <span className="cursor-pointer" onClick={()=>{removeToCart(id)}}>✖️</span>
            </div>
        </div>
    )
}

export default OrderCard