import { useRoutes , BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../My-Account';
import MyOrder from '../My-Order';
import MyOrders from '../My-Orders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar/Index';
import { ShoppingCartProvider } from '../../Context/Index.jsx';
import './App.css'


  const AppRoutes =()=>{

   
    let routes = useRoutes([
      {path:'/', element: <Home/>},
      {path:'/womenClothing', element: <Home/>},
      {path:'/menClothing', element: <Home/>},
      {path:'/Electronies', element: <Home/>},
      {path:'/jewelery', element: <Home/>},
      {path: '/MyAccount', element: < MyAccount/>},
      {path:'/MyOrder' , element: <MyOrder />},
      {path:'/MyOrders' , element: < MyOrders/>},
      {path:'/MyOrders/:id' , element: < MyOrder/>},
      {path: '/Signin', element: < Signin/>},
      {path:'/#' , element: < NotFound/>}
    ])
    return routes
  }
function App() {

  return (
    
      <ShoppingCartProvider>
      <BrowserRouter>
         <AppRoutes/>
        <Navbar />
      </BrowserRouter>
  </ShoppingCartProvider>
    
  )
}

export default App
