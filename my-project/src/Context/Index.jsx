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

     const filteredItemsByTitleFuncion  =( items , searchByTitle ) =>{
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
     }
    //categoy
    const [searchByCategory , setSearchByCategory] = useState(null)

    const filteredItemsByCategoryFuncion = ( items , searchByCategory ) =>{
        return items?.filter((item) => item.category.toLowerCase()===(searchByCategory))
     }
     const filtredBy = (items, typeOfSearch , isAllTrue) =>{
        if(typeOfSearch == searchByTitle ){
           return setFiltredItems( filteredItemsByTitleFuncion(items, searchByTitle))
        }else if(typeOfSearch == searchByCategory &&  ! isAllTrue ){
            return setFiltredItems(filteredItemsByCategoryFuncion(items, searchByCategory))
        }else if ( typeOfSearch == searchByCategory && isAllTrue == searchByTitle ){
            return setFiltredItems(filteredItemsByTitleFuncion(items, searchByTitle).filter((item) =>(item.category.toLowerCase()) === (searchByCategory.toLowerCase())))

        }
        setSearchByCategory(null)
        setSearchByTitle(null)
    }
    console.log('title :' , setSearchByTitle )
    console.log('categoria :' , setSearchByCategory )
    
     useEffect(()=>{
        if(searchByTitle  && !searchByCategory)
        {(filtredBy(items, searchByTitle))
     }else if( !searchByTitle && searchByCategory) {
        console.log(searchByCategory)
        filtredBy(items , searchByCategory)}
        else if ( searchByTitle && searchByCategory){
            filtredBy(items , searchByCategory , searchByTitle)
        }
     },[items, searchByTitle , searchByCategory])
 

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