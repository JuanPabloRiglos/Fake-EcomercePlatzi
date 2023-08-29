import { useContext } from 'react'
import {NavLink} from 'react-router-dom';
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

        function handleCheckout (){
            let dateForJson =  new Date()
            let dateString = JSON.stringify(dateForJson).substring(0,11)
            let date =( dateString + ' "')
            let totalPriceForJson = context.totalPrice();
            // let finalTotalPrice = JSON.stringify(totalPriceForJson)
            const orderToAdd = {
                date: date,
                products : context.cartProducts,
                id: context.order.length,
                totalProducts : context.cartProducts.length,
                totalPrice : totalPriceForJson
            }
            console.log('aca esta la order creada para sumar a las ordersss')
        
            context.setOrder([...context.order, orderToAdd])
            // limpiamos la orden ya agregada
            context.setCartProducts([]);
            context.setCount(0)

        }
        

    return(
<aside className={`${context.booleanCheckoutSM == false ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed left-2.5 border border-black rounded-lg bg-white p-3`}>
        <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'> My Order </h2>
        <div className='cursor-pointer' onClick={()=> context.changeBoleanCSM()}>✖️</div>
        </div>
        <div className='px-6 overflow-y-scroll'>
        {context.cartProducts.map(item=> (<OrderCard key={item.id}
        id={item.id} 
        title={item.title}
        image={item.image}
        price={item.price}
        removeToCart={removeToCart}
        quantity={item.quantity}
        addMore={addMore}
        removeToCartOneOfOne={removeToCartOneOfOne}
        /> ))}</div>
        <div className='flex justify-between m-4'>
            <p>Total Price</p>
            <span className='text-bold'> {` $ ${context.totalPrice()}`} </span>
        </div>
        <NavLink to={`/MyOrders/${context.order.length}`}>
        <button className='w-full bg-black text-white py-3 rounded-lg' onClick={()=>{ handleCheckout()}}> Checkout </button>
        </NavLink>
</aside>
    )
}
export default CheckoutSideMenu

