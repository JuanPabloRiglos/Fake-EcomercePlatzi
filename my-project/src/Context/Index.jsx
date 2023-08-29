/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { createContext , useState , useEffect} from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

    const [items, setItems] = useState([]);
    

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
    }, [])
  
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

    // ORDER - shoppi cart -- navPrincipal

    const [order , setOrder] = useState([ ])

    // Filtrado de datos por
    const [filtredItems, setFiltredItems] = useState([])
    //title
    const [searchByTitle , setSearchByTitle] = useState(null)
    console.log(searchByTitle);
     const filteredItemsByTitleFuncion  =( items , searchByTitle ) =>{
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
     }
    //categoy
    const [searchByCategory , setSearchByCategory] = useState(null)
    console.log(searchByCategory);
    const filteredItemsByCategoryFuncion = ( items , searchByCategory ) =>{
        return items?.filter((item) => item.category.toLowerCase().includes(searchByCategory))
     }
    //  //see ALL again
    //  const seeAllAgein =  (items) =>{
    //     return items?.map((item) => setItems(item))
    //  }
     //useEfect segun Search

     useEffect(()=>{
        if(searchByTitle)
        {setFiltredItems(filteredItemsByTitleFuncion(items, searchByTitle))
     }else if(searchByCategory) {
      setFiltredItems(filteredItemsByCategoryFuncion(items , searchByCategory))}
     },[items, searchByTitle , searchByCategory])
    console.log('filtredItems nuevos: ', filtredItems )

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
           return totalValue.toFixed(2)
        };
    
  
    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
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
            totalPrice, 
            order, 
            setOrder, 
            searchByTitle, 
            setSearchByTitle,
            filtredItems, 
            setFiltredItems,
            searchByCategory,
            setSearchByCategory
            }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}