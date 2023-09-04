import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext} from '../../Context/Index'


function Navbar(){
const context = useContext(ShoppingCartContext)

// Handler de Sign In - Sing Out
const signOut = localStorage.getItem('sign-out')
const parsedSignOut = JSON.parse(signOut)
const isUserSignOut = context.signOut || parsedSignOut



function handleSignOut(){ // indistitno usar este tpo de funcion, o las arrow. La uso asi, solo para usar las dos
    let stringifiedSingOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSingOut)
    context.setSignOut(true)
}

//Fin  Handler de Sign In - Sing Out

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState



function showCart(){// aun no anda, si hace falta, revisar al final del curso.
    if ( context.booleanCheckoutSM) { context.changeBoleanCSM()}
}

const deletedFilters =()=>{
    
    context.setFiltredItems([]);
}

const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
           <li className='text-black/60'>
                    <NavLink to='/myemai@gmail.com' className={({isActive})=> isActive? activeStyle:undefined}> 
                    {parsedAccount?.email}  
                     </NavLink>
            </li>
          
            <li>
                    <NavLink to='/MyOrders' className={({isActive})=> isActive? activeStyle:undefined}> 
                    My Orders         
                     </NavLink>
                </li>

                <li>
                    <NavLink to='/myAccount' className={({isActive})=> isActive? activeStyle:undefined}> 
                    My Account         
                     </NavLink>
                </li>

                <li>
                    <NavLink to='/signin' className={({isActive})=> isActive? activeStyle:undefined} onClick={()=>{handleSignOut()}}> 
                         Sing out
                     </NavLink>
                </li>
                <li className='flex justify-center items-center' onClick={()=>{showCart()}}>
            <NavLink to='/MyOrder' className={({isActive})=> isActive? activeStyle:undefined}> 
            🛒 {context.count}    

             </NavLink>
        </li>
        </>
      )
    } else {
      return (
        <li>
                    <NavLink to='/signin' className={({isActive})=> isActive? activeStyle:undefined} onClick={()=>{handleSignOut()}}> 
                         Sing in
                     </NavLink>
                </li>
      )
    }
  }

    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-5 top-0 w-full py-5 px-8 text-sm font-light' >
            <ul className='flex items-center gap-3'>
                <li className='font font-semibold'>
                    <NavLink  to={`${isUserSignOut ? '/signin' : '/'}`}
                    onClick={()=>{deletedFilters()}}
                    className={({isActive})=> isActive? activeStyle:undefined} >
                    Shopi         
                     </NavLink>
                </li>
                <li >
                    <NavLink to='/' 
                     onClick={()=>{deletedFilters()}}
                     className={({isActive})=> isActive? activeStyle:undefined}> 
                    All         
                     </NavLink>
                </li>
                <li onClick={()=>{context.setSearchByCategory("women's clothing")}}>
                    <NavLink to='/womenClothing' 
                     
                    className={({isActive})=> isActive? activeStyle:undefined } >  
                    women Clothing         
                     </NavLink>
                </li>
                <li onClick={()=>{context.setSearchByCategory("men's clothing")}}>
                    <NavLink  to='/menClothing' className={({isActive})=> isActive? activeStyle:undefined}> 
                    men Clothing
                     </NavLink>
                </li>
                <li onClick={()=>{context.setSearchByCategory("electronics")}}>
                    <NavLink  to='/Electronies' className={({isActive})=> isActive? activeStyle:undefined}> 
                    Electronies          
                     </NavLink>
                </li>
                <li onClick={()=>{context.setSearchByCategory("jewelery")}}>
                    <NavLink  to='/jewelery' className={({isActive})=> isActive? activeStyle:undefined}> 
                    jewelery         
                     </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/Others' className={({isActive})=> isActive? activeStyle:undefined}> 
                    Others         
                     </NavLink>
                </li> */}
            </ul>

            <ul className='flex items-center gap-3'>
                {renderView()}
            </ul>

        </nav>
    );
}

export default Navbar