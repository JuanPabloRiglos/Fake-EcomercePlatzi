/* eslint-disable react/prop-types */
import { createContext , useState} from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    //cantidad de productos en el carrito
    const [count , setCount]= useState(0);
    // seteador de estado para mostrar detalle de producto
    const [booleanProductDetail , setbooleanProductDetail] =useState(true)
    const changeBoleanPD =()=>{
        setbooleanProductDetail(! booleanProductDetail)
    };

    // product detail - show products
    const [productToShow , setProductToShow] = useState({});
    console.log(productToShow)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            changeBoleanPD,
            booleanProductDetail,
            productToShow,
            setProductToShow
            }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}