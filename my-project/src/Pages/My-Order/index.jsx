import { useContext } from "react";
import { Link } from "react-router-dom";
import {ShoppingCartContext} from '../../Context/Index'
import Layout from "../../Components/Layout/Index"
import OrderCard from '../../Components/OrderCard/Index'

function MyOrder() {

  const context = useContext(ShoppingCartContext)
  let oldsOrder = [...context.order];
 let currentPath = window.location.pathname;
 let idInPath = Object.values(currentPath).pop()

 
  return (
    
      <Layout className='bg-teal-300'>
       
       <div className="flex w-80  justify-center items-center relative mb-6">
        <Link to='/MyOrders' className="absolute left-0">
        <p className="h-6 w-6 text-black cursor-pointer">« </p>
        </Link>
        <h1> My Order </h1>
        </div>  


        <div className='px-6 overflow-y-scroll'>
        { (idInPath) ? oldsOrder[idInPath].products.map((item) => (<OrderCard key={item.id}
        id={item.id} 
        title={item.title}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
        /> )): 
        oldsOrder[oldsOrder.length -1].products.map((item) => (<OrderCard key={item.id}
          id={item.id} 
          title={item.title}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          /> ))
         }
        </div>
      </Layout>
  
    
  )
}

export default MyOrder
