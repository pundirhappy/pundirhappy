import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {FaCartPlus} from 'react-icons/fa'




const Navbar = ({size , setShow}) => {
  useEffect(()=>{
    localStorage.clear("details")
  },[])

  return (
    <>
    <nav>
    <div className='nav-box'>
    <span className='navbar' onClick={() =>setShow(true)}>
    <ul>
      <li className='home'>
        <Link to="/"> Home  </Link>
      </li>
      </ul>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
       
        <div className='word'>
    <Link to="/addproducts"> Add More Products  </Link>
     </div>
        </span> 
        <div   className='cart'  onClick={() =>setShow(false)}>
          <span> 
             
            <Link to="/viewcart">  <FaCartPlus/> </Link>
         </span>
         <span className='text-info'> {size} </span>
    </div>
    </div>

    </nav>
    </>
  )
}

export default Navbar