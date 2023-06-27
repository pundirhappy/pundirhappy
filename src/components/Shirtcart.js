import React, { useEffect, useState } from 'react';
import "./Cart.css";

const Shirtcart = ({cart , setCart , handleChange}) => {
    const[price , setPrice] = useState(0);

    useEffect (() =>{
        handlePrice();
    })

    const handlePrice = () => {
        let ans = 0;
     cart.map((item) =>(
            ans +=item.amount * item.price
        ))
        setPrice(ans);
    }

   const handleRemove = (id) => {
       const arr = cart.filter ((item) =>item.id !== id);
       setCart(arr);
    //    handlePrice();
   }
 
  return (
    <article>
        <h1 className='text-info'> Items In Cart </h1>
        {
          cart?.map((item)=>(
            <div className='cart-box' key={item.id}>
                <div className='cart-image'>
                    <img src={item.image} height="150" width="200" />
                    <p> {item.name} </p>
                </div>
                <div>
                    <button onClick={() =>handleChange(item, +1)}> + </button>
                    <button>  {item.amount} </button>
                    <button  onClick={() =>handleChange(item,-1)}> - </button>
                </div>
                <div>
                    <span> {item.price} </span>
                    <button onClick={()=>handleRemove(item.id)}> Remove </button>
                </div>
            </div>
  ))  
        }
        <div className='total'>
            <span> Total Price of Cart </span>
            <span> Rs - {price} </span>
        </div>
    </article>
  )
};

export default Shirtcart;