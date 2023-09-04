import { useContext } from 'react';
import { useRoutes , BrowserRouter , Navigate} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../My-Account';
import MyOrder from '../My-Order';
import MyOrders from '../My-Orders';
import NotFound from '../NotFound';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar/Index';
import { ShoppingCartProvider , ShoppingCartContext , initailizeLocalStorage} from '../../Context/Index.jsx';
import './App.css'


  const AppRoutes =()=>{

    const context = useContext(ShoppingCartContext)
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = Object.keys(context.account).length === 0
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut
   
    let routes = useRoutes([
      {path:'/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/signin'} /> },
      {path:'/womenClothing',element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/signin'} /> },
      {path:'/menClothing', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/signin'} />},
      {path:'/Electronies',  element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/signin'} />},
      {path:'/jewelery',  element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/signin'} />},
      {path: '/MyAccount', element: < MyAccount/>},
      {path:'/MyOrder' , element: <MyOrder />},
      {path:'/MyOrders' , element: < MyOrders/>},
      {path:'/MyOrders/:id' , element: < MyOrder/>},
      {path: '/signin', element: < Signin/>},
      {path:'/#' , element: < NotFound/>}
    ])
    return routes
  }
function App() {
  initailizeLocalStorage()
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
