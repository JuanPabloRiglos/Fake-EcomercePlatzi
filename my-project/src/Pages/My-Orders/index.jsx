import { useContext } from "react";
import {ShoppingCartContext} from '../../Context/Index'
import {Link} from 'react-router-dom'
import Layout from "../../Components/Layout/Index"
import OrderSCard from "../../Components/orderSCard/index"

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
  return (
    
      <Layout className='bg-teal-300'>
        <h1 className="font-large mb-8"> My Orders </h1>
{ context.order.map((item)=>(
  
  <Link key={item.id} to={`/MyOrders/${item.id}`}>
  <OrderSCard
  date={(item.date)}
  totalProducts={item.totalProducts}
  totalPrice={item.totalPrice}/>
  </Link>
))
        }
      </Layout>
  
    
  )
}

export default MyOrders