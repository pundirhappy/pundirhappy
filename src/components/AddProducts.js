import React, {useState } from 'react';
 import axios from 'axios';
 import FileBase64 from  'react-file-base64';
 import './Cards.css'

const AddProducts = () => {
    const [name  , setName]=useState("");
    const [price , setPrice]=useState("");
    const [image  , setImage]=useState("");


    async  function addProduct (e)  {
    
const body = {
   name:name,
   price:price,
   image:image,
}

 await axios.post("http://localhost:4000/posts" , body)
    .then((result)=>{
        console.log(result)
    })
};

    function handleImageUpload(data) {
        console.log("dd",data);
          setImage(data.base64)
};


  return (
<>
    <div className='word'>
        <h1> ADD PRODUCT </h1>
        <div className='col-sm-6 offset-sm-3'>
            <br/>
          
          <input type="text" placeholder="Add Product Name"  onChange={(e) =>setName(e.target.value)}/> 
            <br/>
            <br/>
             <input type="number" placeholder="Set Fixed Price" onChange={(e) =>setPrice(e.target.value)}/> 
            <br/>
            <br/>
              <FileBase64  multiple={false} onDone={handleImageUpload} accept="image/*"/>   
               <br/>
      <br/>
       <button  onClick={addProduct} className='btn btn-outline-dark'>  Add Product  </button>
</div>
    </div>

    </>
  )
};
export default AddProducts;