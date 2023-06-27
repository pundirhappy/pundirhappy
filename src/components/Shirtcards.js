import React from 'react';
import './Cards.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shirtcards = ({shirtitem , handleClick}) => {
const {name , price , image} = shirtitem;

  return (
   
    <div className='cards'>
        <div className='image-box'>
            
<img src={image} alt="Image" height="280"/>
        </div>
<div className='details'>
 <p>        {name} </p>
 <p>Price - {price} </p>
 <button onClick={()=>handleClick(shirtitem)}> Add To Cart </button>
</div>
<ToastContainer/>

    </div>

  )
};

export default Shirtcards;