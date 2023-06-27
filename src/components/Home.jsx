import React from 'react';
import {  useNavigate } from 'react-router-dom';
import "./Navbar.css";
import Product from './Product';

function Home() {

    const navigate = useNavigate()
  return (
    <>
    <div className="hero">
    <div class="card bg-dark text-white">

  <img src="/pics/homepic.jpg" class='card-img' alt="background" />

  <div class="card-img-overlay d-flex flex-column justify-content-center">
       <div className="container">
    <h5 class="ad"> Click on Products Button to Check Products </h5>

    <p class="card-text lead fs-2">
     <button onClick={()=>navigate("/products")} className='productnames'>  Products  </button> 
         </p>
    </div>
  </div>
</div>
</div>
<Product/>

</>
  )
};

export default Home;