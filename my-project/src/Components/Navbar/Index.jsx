import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext} from '../../Context/Index'


function Navbar(){
const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-5 top-0 w-full py-5 px-8 text-sm font-light' >
            <ul className='flex items-center gap-3'>
                <li className='font font-semibold'>
                    <NavLink  to='/' 
                    className={({isActive})=> isActive? activeStyle:undefined} >
                    Shopi         
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={({isActive})=> isActive? activeStyle:undefined}> 
                    All         
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/womensClothing' className={({isActive})=> isActive? activeStyle:undefined}> 
                    women Clothing         
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/menClothing' className={({isActive})=> isActive? activeStyle:undefined}> 
                    men clothing
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/electronies' className={({isActive})=> isActive? activeStyle:undefined}> 
                    Electronies          
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/jewelery' className={({isActive})=> isActive? activeStyle:undefined}> 
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
                <li className='flex justify-center items-center'>
                    <NavLink to='/MyOrder' className={({isActive})=> isActive? activeStyle:undefined}> 
                    🛒 {context.count}    
                     </NavLink>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar