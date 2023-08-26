import {  useState, useEffect } from "react"
import Layout from "../../Components/Layout/Index"
import Card from "../../Components/Card/Index"
import ProductDetail from '../../Components/ProductDetail'



// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
function Home() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    
      <Layout className='bg-teal-300'>
        Home
      
       <div className="grid gap-20 grid-cols-3 w-81 max-w-screen-sm mr-12 mt-5">  

      
    {items.map((item)=>( <Card key={item.id} data={item} />)) 
    }
       </div>
       <ProductDetail />
      </Layout>
  
    
  )
}

export default Home
