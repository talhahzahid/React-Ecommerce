import React from 'react'
import { useSelector } from 'react-redux';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

const UserCart = () => {
  const selector = useSelector(state => state.cartitem);
  console.log(selector);
  
  console.log('hello');
  

  
  return (
    <>
      <h1>hello world</h1>
      <div className='flex flex-wrap justify-center mt-[4rem] gap-10 items-center'>
      {
        selector ? selector.map((item,index)=>{
          return <div key={index}>
        <Card3 image={item.image} title={item.title} price={item.price} />
       </div>
        }):<h1>loading</h1>
      }
      </div>
    </>
  )
}

export default UserCart