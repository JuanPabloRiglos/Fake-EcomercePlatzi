import { useRoutes , BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../My-Account';
import MyOrder from '../My-Order';
import MyOrders from '../My-Orders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import './App.css'


  const AppRoutes =()=>{
    let routes = useRoutes([
      {path:'/', element: <Home/>},
      {path: '/MyAccount', element: < MyAccount/>},
      {path:'/MyOrder' , element: <MyOrder />},
      {path:'/MyOrders' , element: < MyOrders/>},
      {path: '/Signin', element: < Signin/>},
      {path:'/#' , element: < NotFound/>}
    ])
    return routes
  }
function App() {

  return (
    
      // <div className='bg-teal-300'>
      //  <Home />
      //  <MyAccount/>
      //  <MyOrder/>
      //  <MyOrders/>
      //  <NotFound/>
      //  <Signin/>
      // </div> 
      <BrowserRouter>
     <AppRoutes/>
      </BrowserRouter>
  
    
  )
}

export default App
