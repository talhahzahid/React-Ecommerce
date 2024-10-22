import React from 'react'

const Card3 = (props) => {
  return (
    <>
  <div className="card lg:card-side w-96 p-10 bg-base-100 shadow-xl border">
  <figure className="flex items-center p-2 justify-center w-full h-32"> {/* Fixed height for consistency */}
    <img
      style={{
        maxWidth: '100%', // Image will not exceed the card width
        maxHeight: '100%', // Image will fit within the height of the figure
        objectFit: 'contain', // Maintain aspect ratio without cropping
      }}
      src={props.image}
      alt="Movie"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.price}</p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-neutral" onClick={()=>document.getElementById('my_modal_1').showModal()}>Buy Now</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello Dear </h3>
    <div className='flex justify-center items-center gap-4 flex-wrap mt-5 p-4 bg-gray-50 rounded-lg shadow-md'>
  <form className="flex flex-col gap-4 w-full max-w-md">
    <input
      type="text"
      placeholder="Enter your full name"
      className="input input-bordered input-primary w-full" 
      required 
    />
    
    <input
      type="email"
      placeholder="Enter your email"
      className="input input-bordered input-primary w-full" 
      required 
    />
    
    <input
      type="tel"
      placeholder="Enter your phone number"
      className="input input-bordered input-primary w-full" 
      required 
    />
    
    <input
      type="text"
      placeholder="Enter your address"
      className="input input-bordered input-primary w-full" 
      required 
    />
    
    <button type="submit" className="btn btn-primary w-full">
      Complete Checkout
    </button>
  </form>
</div>

<div className="modal-action mt-4">
  <form method="dialog">
    <button className="btn">Close</button>
  </form>
</div>

  </div>
</dialog>
    </div>
  </div>
</div>
    </>
  )
}

export default Card3