import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import Card2 from '../Components/Card2'
import { data } from 'autoprefixer'
// import Addtocart from '../Components/Addtocart'

const Singleproduct = () => {
  const {id} = useParams()
  // console.log(id);
  const [dataa , setData] = useState('')
  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      // console.log(res.data);  
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <div className='pt-[7rem]'>
      
   {
      dataa ? (
      <div className='flex justify-center items-center'>
        <Card2 image={dataa.image} title={dataa.title} des={dataa.description} price={dataa.price} id={dataa.id}/>
      </div>
      ):<h2 className='text-center'>loading</h2>
    }
    </div>
    </>
  )
}

export {data};
export default Singleproduct;