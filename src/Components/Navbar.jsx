import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from 'react-redux';


const Navbar = () => {
  // const selector = useSelector()
  // const selector = useSelector(state => state.cartitem); 
  // const [quantity, setQuantity] = useState(1);
  // console.log(selector);
  
// const quantities = useSelector(state => state.quantity);
// const itemQuantity = quantities[item.id] || 0;
  return (
    <>
      <div className="navbar bg-neutral-content fixed top-0 left-0 w-full z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/singleproduct">SingleProduct</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">
         <Link to='/usercart'> <MdOutlineShoppingBag className='text-xl'/>
         <div className="badge badge-primary text-xl"><h1>0</h1></div></Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
