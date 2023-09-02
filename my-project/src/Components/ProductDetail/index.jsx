import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context/Index'
import './ProductDetail.css'



 const ProductDetail =()=>{
    const context = useContext(ShoppingCartContext)
    let itemToShow = context.productToShow;
    console.log(itemToShow)
    return(
<aside className={`${context.booleanProductDetail == false ? 'flex' : 'hidden' } productDetail  flex-col fixed right-2.5 border border-black rounded-lg bg-white overflow-y-scroll`}>
        <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'> Detail </h2>
        <div className='cursor-pointer' onClick={()=> context.changeBoleanPD()}>✖️</div>
        </div>
        <figure className='px-6'>
            <img className=' rounded-lg' src={`${itemToShow.image}`} alt={`${itemToShow.title}`} />
        </figure>
            <p className='flex flex-col p-6' >
                <span className='font-medium text-2xl'>{itemToShow.price}</span>
                <span className='font-medium text-md'>{itemToShow.title}</span>
                <span className='font-light text-sm'>{itemToShow.description}</span>
            </p>
</aside>
    )
}
export default ProductDetail