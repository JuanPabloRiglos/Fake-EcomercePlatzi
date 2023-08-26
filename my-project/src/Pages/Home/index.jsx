import Layout from "../../Components/Layout/Index"
import Card from "../../Components/Card/Index"
import {  useState, useEffect } from "react"



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
      
       <div className=" grid gap-20 grid-cols-3 w-full max-w-screen-lg">  

      
    {items.map((item)=>( <Card key={item.id} data={item} />)) 
    }
       </div>
      </Layout>
  
    
  )
}

export default Home
