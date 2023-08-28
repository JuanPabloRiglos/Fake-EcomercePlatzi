/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context/Index'
import './style.css'


function Card({data : item}){
    console.log(item)
    const context = useContext(ShoppingCartContext)
   
   const showProductDetail =()=>{
    // context.changeBoleanPD();
    context.setProductToShow(item)

    if (context.booleanProductDetail) { context.changeBoleanPD()}

   };

   
   const addToCart=(product)=>{
    context.setCount(context.count + 1);//agrega num al Cart
    product.quantity = 1;
    context.setCartProducts( [...context.cartProducts , product]);

    if ( context.booleanCheckoutSM) { context.changeBoleanCSM()}
};

 function renderIcon(id){
    // bloquea el boton para agregar product al carrito poniendo un check en su lugar
    let isInCart = context.cartProducts.filter(product => product.id == id).length > 0;
    console.log(isInCart)
    if(isInCart){
        return(
                <div className={`absolute top-0 right-0 flex justify-center items-center bg-green-600 color-white w-6 h-6 rounded-full m-2 p-1 border border-black text-white`}>✓</div> 
        )
    }else{
        return (
    <div className={`absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border border-black`} onClick={()=> addToCart(item)}>➕</div>
   ) }
 }


    return(
        <div className="conteiner-card bg-white cursor-pointer w-70 h-45 rounded-lg"
        onClick={()=> showProductDetail()}>
        <figure className='relative mb-1 w-full h-4/5 px-2'>
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {item.category} </span>
            <img className='w-full h-full object-contain rounded-lg' src={`${item.image}`} alt={`${item.title}`}/>
            {renderIcon(item.id)}
        </figure>
        <p  className='flex justify-between'>
        <span  className=" text-sm font-light"> {item.title}</span>
        <span  className=" text-sm font-medium "> {item.price} </span>
      </p>
        </div>
    )
}
export default Card