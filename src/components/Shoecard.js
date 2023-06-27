import React from 'react';
import './Cards.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shoecard = ({shoeitem , handleClick}) => {
const {name , price , image} = shoeitem;

  return (
   
    <div className='cards'>
        <div className='image-box'>
            
<img src={image} alt="Image" height="280"/>
        </div>
<div className='details'>
 <p>        {name} </p>
 <p>Price - {price} </p>
 <button onClick={()=>handleClick(shoeitem)}> Add To Cart </button>
</div>
<ToastContainer/>
    </div>

  )
};

export default Shoecard;