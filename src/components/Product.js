import React, { useState , useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import './Navbar.css';

const Product = () => {

    const[data , setData]= useState();
    const navigate = useNavigate();
    

    useEffect(()=>{
        getUser();
        console.log(data);
            },[]);

    const getUser = async () => {
        await axios.get("http://localhost:4000/posts").then(res=> setData(res.data));
        };

        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:4000/posts/${id}`);
            getUser();
          } catch (error) {
            console.error('Error deleting product:', error);
          }
        };
  
  return (
    <>
    <center> 
<h1 className='top'> Our Products  </h1> </center>
    <div>
<table className="table table-hover">
  <tr>
    <th>
    </th>
  </tr>
  
  {
    data && data.map(user =>(
        <tr>
          
  <div className='images'>
<div className='image-box'> 
     <td  onClick={() =>navigate("/shirtvariants")}>
     <h2>  {user.shirtname}  </h2>  <img src={user.shirt} height="500" />   </td>  


      <td onClick={() =>navigate('/outofstock')}> <h1>  {user.pantname} </h1> <img src={user.pants}  height="500"/> </td>
      <td onClick={() =>navigate("/shoevariants")}> <h2>  {user.shoesname}  </h2> <img src={user.shoes}  height="500"/>  </td>
      <td onClick={() =>navigate("/tshirtvariants")}> <h2>  {user.tshirtname} </h2>
       <img src={user.tshirt}  height="500"/>  </td>  
       

    <td className='imgright'>  
    <h2>  {user.hpname} </h2>  <img src={user.hpimage} height="400"/> </td>  
    <td onClick={() =>navigate("/boatvariants")}> <h2>  {user.boatname} </h2> <img src={user.boatimage} height="400"/> </td>
    <td> <h2>  {user.iname} </h2>   <img src={user.imagess} height="400"/>  </td> 


    <td className='rem'>
       <h2> {user.name}</h2>  <img src={user.image} height="400"/>  <h2>   {user.price} </h2> 
    {/* <button onClick={() => handleDelete(user.id)} className='btn btn-outline-danger'> Delete </button> */}
     </td>
    </div>
    </div>
      </tr>
  ))
  };
</table>
    </div>
    </>
  );
};
export default Product;