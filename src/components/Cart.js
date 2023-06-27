import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    handlePrice();
    setIsEmpty(cart.length === 0); 
  }, [cart]);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <>
      <article>
    
        {isEmpty ? ( 
          <p className="emptycart">Your cart is empty.</p>
        ) : (
          cart?.map((item) => (
            <div className='cart-box' key={item.id}>
              <div className='cart-image'>

                <img src={item.image} height="280" width="210" alt={item.name} />
                <p className='pname'>{item.name}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, +1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
        {!isEmpty && ( 
          <div className='total'>
            <span>Total Price of Cart</span>
            <span>Rs :- {price}</span>
          </div>
        )}
      </article>

      {cart.length > 0 && (
        <div>
          <Link to="/checkout">
            <h2 className='checkout'>Proceed To Checkout</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;




                                        // OLD Cart code down 
























































// import React, { useEffect, useState } from 'react';
// import "./Cart.css";
// import { Link } from 'react-router-dom';


// const Cart = ({cart , setCart , handleChange}) => {
//     const[price , setPrice] = useState(0);
    

//     useEffect (() =>{
//         handlePrice();
//     })
    
//     const handlePrice = () => {
//         let ans = 0;
//         cart.map((item) =>(
           
//             ans +=item.amount * item.price
//         ))
//         setPrice(ans);
//     }
//        const handleRemove = (id) => {
//        const arr = cart.filter ((item) =>item.id !== id);
//        setCart(arr);
//     //    handlePrice();
//    }
 
   
//   return (
// <>
//     <article>
//    <center>    <h1 className='text-info'> Items In Cart </h1>  </center>
//         {
//           cart?.map((item)=>(
           
//             <div className='cart-box' key={item.id}>
//             <div className='cart-image'>
//   <img src={item.image} height="280" width="210"/>
//                 <p> {item.name} </p>
//             </div>
//             <div>
//                 <button onClick={() =>handleChange(item, +1)}> + </button>
//                 <button>  {item.amount} </button>
//                 <button  onClick={() =>handleChange(item,-1)}> - </button>
//             </div>
//             <div>
//                 <span> {item.price} </span>
//                 <button onClick={()=>handleRemove(item.id)}> Remove </button>
//             </div>
//             </div>
    
//   ))  
//         }
//         <div className='total'>
//             <span> Total Price of Cart </span>
//             <span> Rs :- {price} </span>
//         </div>
//     </article>


//   <div>
//   <Link to="/checkout"> <h2 className='checkout'> Proceed To Checkout </h2>   </Link>
//   </div>
//     </>
//   )
// };

// export default Cart;

