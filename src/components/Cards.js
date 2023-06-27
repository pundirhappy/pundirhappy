import React from 'react';
import './Cards.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({item , handleClick}) => {
const {name , price , image} = item;

  return (
   
    <div className='cards'>
        <div className='image-box'>
            
<img src={image} alt="Immage"/>
        </div>
<div className='details'> 

     <p>     {name} </p>
 <p>Price -  {price}</p>
 <button onClick={()=>handleClick(item)}> Add To Cart </button>
</div>
<ToastContainer/>
    </div>

  )
};

export default Cards;