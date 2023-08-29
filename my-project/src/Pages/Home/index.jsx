/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import Layout from "../../Components/Layout/Index"
import Card from "../../Components/Card/Index"
import ProductDetail from '../../Components/ProductDetail'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

function Home() {
  
  const context = useContext(ShoppingCartContext)

  const renderView = ()=>{
  if(context.searchByTitle && context.searchByTitle.length > 0 ){
    if(context.filtredItems && context.filtredItems.length > 0 ) {

      return(
        context.filtredItems?.map(item => <Card key={item.id} data={item} />)
      )
    }else{
      return (
        <div> Your search don't have result</div>
      )
    } 
    }else if(context.searchByCategory && context.searchByCategory.length > 0){
        return(
          context.filtredItems.map(item => <Card key={item.id} data={item} />)
        )
      
  } else {
    return (
        context.items.map(item => <Card key={item.id} data={item} />))
  }
}
  return (
    
      <Layout className='bg-teal-300'>
       <div className="flex items-center justify-center relative w-80 mb-4"> 
       <h1>
        Shoppi Home
        </h1>
        </div>
        <input type="text" placeholder="Write for Search" className="rounded-lg border border-black w-80 p-4 mb-4 focus focus:outline-none" onChange={(event) =>
        context.setSearchByTitle(event.target.value)
        } />
      
       <div className="grid gap-20 grid-cols-3 w-85 max-w-screen-sm ml-6 mt-5">  

     { renderView()}
  
       </div>
       <ProductDetail />
       <CheckoutSideMenu/>
      </Layout>
  
    
  )
}

export default Home
