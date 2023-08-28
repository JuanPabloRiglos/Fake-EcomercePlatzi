import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context/Index'
import OrderCard from '../OrderCard/Index'
import './styles.css'



 const CheckoutSideMenu =()=>{
    const context = useContext(ShoppingCartContext)

    const addMore=(id)=>{
        const updatedProducts = [];
        for(let i = 0 ; i < context.cartProducts.length ; i++ ){
           if( context.cartProducts[i].id == id ){
             context.cartProducts[i].quantity ++ ;
             context.setCount(context.count + 1)
             updatedProducts.push( context.cartProducts[i])
        }else{
            updatedProducts.push( context.cartProducts[i])
        }
        context.setCartProducts(updatedProducts);
       }
    }
   
    function removeToCartOneOfOne(id){
        const updatedProducts = [];
        for(let i = 0 ; i < context.cartProducts.length ; i++ ){
           if( context.cartProducts[i].id == id  && context.cartProducts[i].quantity > 1){
             context.cartProducts[i].quantity -- ;
             
             updatedProducts.push( context.cartProducts[i])
             // si entra aca, va bajando la cantidad de productos iguales
        }else if (context.cartProducts[i].id != id){
            updatedProducts.push( context.cartProducts[i])
        }
        context.setCartProducts(updatedProducts);
         context.setCount(context.count - 1)
       }
    

       
    }
        function removeToCart(id){
        const newCart = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(newCart)
        const removeToCart = context.cartProducts.filter(product => product.id == id);
        console.log()
        let totalToDescount = removeToCart[0].quantity
        context.setCount(context.count - totalToDescount)}

    return(
<aside className={`${context.booleanCheckoutSM == false ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed left-2.5 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'> My Order </h2>
        <div className='cursor-pointer' onClick={()=> context.changeBoleanCSM()}>✖️</div>
        </div>
        <div className='px-6 overflow-y-scroll'>
        {context.cartProducts.map(item=> (<OrderCard key={item.id}
        id={item.id} 
        title={item.title}
        image={item.image}
        prince={item.price}
        removeToCart={removeToCart}
        quantity={item.quantity}
        addMore={addMore}
        removeToCartOneOfOne={removeToCartOneOfOne}
        /> ))}</div>
        <div className='flex justify-between m-4'>
            <p>Total Price</p>
            <span className='text-bold'> {` $ ${context.totalPrice()}`} </span>
        </div>
</aside>
    )
}
export default CheckoutSideMenu

{/* <figure className='px-6'>
            <img className=' rounded-lg' src={`${itemToShow.image}`} alt={`${itemToShow.title}`} />
        </figure>
            <p className='flex flex-col p-6' >
                <span className='font-medium text-2xl'>{itemToShow.price}</span>
                <span className='font-medium text-md'>{itemToShow.title}</span>
                <span className='font-light text-sm'>{itemToShow.description}</span>
            </p> */}