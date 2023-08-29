/* eslint-disable react/prop-types */
const OrderCard= product =>{
    console.log(product)
    const {id, title, image, price , removeToCart , quantity , addMore , removeToCartOneOfOne} = product

    // bloque para renderizar card segun parametros, seran distintos de acuerdo en que padre se renderiza.
    let showQuantity;
    let removeOrAdd;
    if( addMore && removeToCartOneOfOne ){
        removeOrAdd = <div className=" flex justify-around ">
                    <p className="cursor-pointer" onClick={()=>{removeToCartOneOfOne(id)}}> -</p>
                    <p> {quantity} </p>
                    <p className="cursor-pointer" onClick={()=>{addMore(id)}}> + </p>
                  </div>
    }else{
        showQuantity = <p> total item : {quantity}  </p> 
    }

    let spanRemoveAll;
    if(removeToCart){
        spanRemoveAll = <span className="cursor-pointer" onClick={()=>{removeToCart(id)}}>✖️</span>
    }

    return(
        <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2 pb-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={`${image}`} alt={`${title}`} />
                </figure>  
                {removeOrAdd}
                {showQuantity}
                <p className="text-sm font-light">{title}</p>
                  
            </div>
           
            <div className="flex items-center p-2 gap-2">
                <p className="text-lg font-medium">{price}</p>
                {spanRemoveAll}
            </div>
        </div>
    )
}

export default OrderCard