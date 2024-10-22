import React from 'react'

const Card3 = (props) => {
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
    style={{
        width:'200px'
    }}
      src={props.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Chech It Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card3