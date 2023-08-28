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


    //Product Cart (carrito)
    const [cartProducts , setCartProducts] = useState([ ])

    // checkout Side Menu --> Show Cart
    const [booleanCheckoutSM , setbooleanCheckoutSM] =useState(true)
    const changeBoleanCSM =()=>{
        setbooleanCheckoutSM(! booleanCheckoutSM)
    };
    // retorna el valor total de productos en el carrito
     
    const totalPrice=()=>{
        let totalValue = 0;
        for(let i = 0 ; i < cartProducts.length ; i ++){
            if(cartProducts[i].quantity >= 1){
                let priceForTotal = cartProducts[i].price * cartProducts[i].quantity
                totalValue = totalValue + priceForTotal
            }

            totalValue = totalValue + cartProducts[i].price
        }
           return totalValue
        };
    
  
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            changeBoleanPD,
            booleanProductDetail,
            productToShow,
            setProductToShow, 
            cartProducts,
            setCartProducts,
            booleanCheckoutSM,
            changeBoleanCSM,
            totalPrice
            }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}