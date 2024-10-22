import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from './Components/Card'

const App = () => {
  const [data , setData] = useState('')
  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <h1>Ecommerce</h1>
    <div className='flex flex-wrap justify-center items-center gap-4'>
    {
      data ? ( data.map((item)=>{
       return <div key={item.id} className='border'>
          <Card image={item.image} category={item.category} price={item.price} />
       </div>  
      })):<h1>Loading..</h1>
    }
    </div>
    </>
  )
}

export default App