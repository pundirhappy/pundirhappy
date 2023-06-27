import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Product from './components/Product';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AddProducts from './components/AddProducts';
import { toast } from 'react-toastify';
import Shirtamazon from './components/Shirtamazon';
import Boatamazon from './components/Boatamazon';
import Shoeamazon from './components/Shoeamazon';
import Checkout from './components/Checkout';
import Home from './components/Home';
import State from './components/State';
import OrderDetails from './components/OrderDetails';
import OutOfStock from './components/OutOfStock';
import Example from './components/Example';

const App = () => {
const [show , setShow] =useState(true);
const [cart , setCart] =useState([]);

const handleClick = (item)=>{
  console.log(item);
  toast.success("item added" ,{
    position:'top-center',
    autoClose:1000,
  })

  let isPresent = false;
  cart.forEach((product) =>{
    if (item.id === product.id)
    isPresent = true;
    // console.log(isPresent);
  })

  setCart([...cart, item]);     
}
  
const handleChange = (item, d) =>{
  let ind = -1;
  cart.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = cart;
  tempArr[ind].amount += d;
  
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCart([...tempArr])
}
// console.log(show);
  return (
   <>
<BrowserRouter>
   <Navbar size={cart.length} setShow={setShow} />
   <Routes>
    
    <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Product/>}/>
  <Route path="/addproducts" element={<AddProducts/>}/>
  <Route path="/tshirtvariants" element={<Amazon handleClick={handleClick} />}/> 
  <Route path="/shirtvariants" element={<Shirtamazon handleClick={handleClick} />}/> 
  <Route path="/boatvariants" element={<Boatamazon handleClick={handleClick}/>}/> 
  <Route path="/shoevariants" element={<Shoeamazon handleClick={handleClick} />}/> 
 <Route path="/viewcart" element={<Cart cart={cart}  setCart={setCart} handleChange={handleChange}/>}/> 
 <Route path="/checkout" element={<Checkout cart={cart}  setCart={setCart} handleChange={handleChange}/>}/>   
 <Route path ="/state" element={<State/>}/>
 <Route path ="/orderDetails" element={<OrderDetails/>}/>
 <Route path ="/outofstock" element={<OutOfStock/>}/>
 <Route path ="/example" element={<Example/>}/>


   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;