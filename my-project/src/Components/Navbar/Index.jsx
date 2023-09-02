import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext} from '../../Context/Index'


function Navbar(){
const context = useContext(ShoppingCartContext)

function showCart(){// aun no anda, si hace falta, revisar al final del curso.
    if ( context.booleanCheckoutSM) { context.changeBoleanCSM()}
}

const deletedFilters =()=>{
    
    context.setFiltredItems([]);
}
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-5 top-0 w-full py-5 px-8 text-sm font-light' >
            <ul className='flex items-center gap-3'>
                <li className='font font-semibold'>
                    <NavLink  to='/' 
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
                <li className='text-black/60'>
                    <NavLink to='/myemai@gmail.com' className={({isActive})=> isActive? activeStyle:undefined}> 
                    Myemai@gmail.com         
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
                    <NavLink to='/Signin' className={({isActive})=> isActive? activeStyle:undefined}> 
                         Sing In
                     </NavLink>
                </li>
                <li className='flex justify-center items-center' onClick={()=>{showCart()}}>
                    <NavLink to='/MyOrder' className={({isActive})=> isActive? activeStyle:undefined}> 
                    🛒 {context.count}    

                     </NavLink>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar