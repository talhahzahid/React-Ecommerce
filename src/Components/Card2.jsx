import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Config/Redux-config/reducer/cartSlice';

const Card2 = (item) => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.cartitem);
  console.log(selector);



  const addCartIntoProduct = (item) => {
    // selector.map((val) => {
    //   if (val.id == item.id) {
    //     return;
    //   }
    // });
    // const isProduct = selector.some(val => item.id === val.id);
    const isProduct = selector.some(val => {
      return item.id === val.id
    });

    console.log('add');
    if (!isProduct) {
      dispatch(addItem({ add: item }));
    }

  }

  const { image, des, title, price, id } = item
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{des}</p>
          <h1 className='font-semibold'>Price : {price}</h1>
          <div className="card-actions">
            {/* <button className="btn btn-primary" onClick={()=> addCartIntoProduct(item)} >Add To Cart</button> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-primary" onClick={() => { document.getElementById('my_modal_2').showModal(); addCartIntoProduct(item) }}>Add To Cart</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Item add in to cart check out the cart</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2