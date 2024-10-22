import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate()
  const handle = (id) => {
    console.log(id);
    navigate (`singleproduct/${id}`)
  }

  return (
    <>
      <div className="card glass w-96 p-4 rounded-lg shadow-lg">
        <figure>
          <img style={{ width: "200px", height: "200px" }}
            src={props.image}
            alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.category}</h2>
          <p>{props.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral"  onClick={() => handle(props.id)}>Show More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card