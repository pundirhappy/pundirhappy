import React, { useState , useEffect } from 'react';
import './Navbar.css';
import "./Cart.css";
import axios from 'axios';
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const Checkout = ({cart , setCart , handleChange}) => {

    const [isChecked, setIsChecked] = useState(false);
    const[price , setPrice] = useState(0);

     const navigate = useNavigate();
   

    const { register, handleSubmit, formState: {errors} } = useForm();

    const url = "http://localhost:4000/posts";


    const onSubmit = (data) => {
      axios.post(url,{ 
        id:data?.Ids,
        Name:data?.username,
        LName:data?.lastname,
        Age:data?.age,
        Email:data?.email,
        Phone:data?.phone,
        Gender:data?.gender,
        State:data?.state,
        City :data?.city,
        Street: data?.street,
        Pin : data?.pin,
 })
localStorage.setItem("details",JSON.stringify(data))

console.log(data);
    };

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
    
   }

   


    function handleOrder (){
        toast("Your Order is Ordered",{
            position:'top-center',
            autoClose:2000,
            closeOnClick: true,
          })
          navigate("/orderDetails");
    };
 

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      }

  return (
    <>
    <center>  
<form onSubmit={handleSubmit(onSubmit)}>
    <table border={4}> 
        <h1> Billling Address </h1>
        <hr/>
            <div className="field">
              <label> First Name : </label>
  <input type="text"name="username"placeholder=" Enter Firstname" 
   {...register("username",{ required: "Username is required" ,
   pattern: {value: /^[A-Z][-a-zA-Z]+$/ , message: "this is not a valid name",}
   })}
   />

   {errors.username && <p className='green' >{errors.username?.message}</p>} 
</div>
  
<div className="field">
              <label> Last Name : </label>
  <input type="text"name="lastname"placeholder=" Enter Lastname"
   {...register("lastname",{ required: "Lastname is required" ,
  //  pattern: {value: /^[A-Z][-a-zA-Z]+$/ , message: "this is not a valid name",}
   })}
   />
    {errors.lastname && <p className='green'>{errors.lastname?.message}</p>} 
    </div>

            <div className="field">
              <label>  Age : </label>
  <input type="text"name="age"placeholder=" Enter Age"
   {...register("age",{ required: "Age is required" ,
    min:{value:18, message:"minimum age 18",},
    max:{value:35, message:"maximum age 35",}
   })}/>
 {errors.age && <p className='green'>{errors.age?.message}</p>} 
</div>

<br/>

            <div className="field">
              <label>Email :   </label>
              <input type="email" name="email" placeholder=" Enter Email"
                {...register("email",{ required: "Email is required",
                  pattern : {value: /^\S+@\S+$/i, message: "This is not a valid email",},})} />
             {errors.email && <p className='green'>{errors.email?.message}</p>} 
             </div>


            <div className="field">
                        <label> Phone: </label>
      <input type="tel" name="phone" placeholder="Mobile number" 
      {...register("phone", {required: "Phone No. is required", 
      pattern: {value: /^[0-9()-]+$/, message: "This is not a valid Number",},
       minLength: {value:10, message: "atleast 10 characters",},
      maxLength: {value: 10, message: "10 characters maximum",}, })} />
 
   {errors.phone && <p className='green'>{errors.phone?.message}</p>}
   </div>


 <div className="field">
   <label> Gender : &nbsp; </label>
<input {...register("gender", { required:"onSubmit={handleSubmit(onSubmit)} Choose gender", })} type="radio"  name="gender" value="Male" /> Male &nbsp;
      <input {...register("gender", { required: "pls choose gender",})} type="radio" name="gender" value="Female" /> Female
        {errors.gender && <p className='green'>{errors.gender?.message}</p>} 
         </div>


<div className="field">
<label> State </label>
<select {...register("state", { required: "Select State", })}>
<option value=""> </option>
        <option value="Haryana"> Haryana </option>
        <option value="punjab"> Punjab </option>
        <option value="up"> Uttar pradesh  </option>
        <option value="delhi"> Delhi </option>
      </select>
    {errors.state && <p className='green'>{errors.state?.message}</p>} 
    </div>


 <div className="field">
              <label> City : </label>
  <input type="text"name="city" placeholder=" Enter City "
   {...register("city",{ required: "City is required" ,
   pattern: {value: /^[A-Z][-a-zA-Z]+$/ , message: "this is not a valid City  name",}
   })} />
      {errors.city && <p className='green'>{errors.city?.message}</p>}
       </div>
<br/>


<div className="field">
              <label> Street  Address : </label>
  <input type="text"name="street" placeholder=" Enter House Number "
   {...register("street",{ required: "Street Address is required" ,})}/>
  {errors.street && <p className='green'>{errors.street?.message}</p>}
   </div>




 <div className="field">
                        <label> Pincode </label>
      <input type="text" name="pin" placeholder="Pin code " 
      {...register("pin", {required: "Pin code  is required", 
      pattern: {value: /^[0-9()-]+$/, message: "This is not a valid Pin",},
       minLength: {value:6, message: "atleast 6 characters",},
      maxLength: {value: 6, message: "6 characters maximum",}, })} />
  {errors.pin && <p className='green'>{errors.pin?.message}</p>}
   </div>



 <div className='express-shipping ship-address'>
      <input type="checkbox" className='btn btn-danger' checked={isChecked} onChange={handleCheckboxChange} /> 
      Ship to a different address?
                        </div>
                    {isChecked && (
                         <div className='mb-2 field-class'>
                         <input  type="text" placeholder="Enter text" />
                          <br/>
                          <input  type="number" placeholder="Enter number" />
                          </div>
                         )}
<br/>
                              <button className='btn btn-success'> Save </button>
                              </table>
             </form>
<br/> 
<br/> 

     <table border={8}> 
<div className='billing'>
    <h1> Order Details</h1>
    <hr/>
        {
          cart?.map((item)=>(
            <div className='cart-box' key={item.id}>
            <div className='cart-image'>
                <img src={item.image} height="210" width="180"/>
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
            <span>  Sub Total </span>
            <span> Rs :- {price} </span>
        </div>
        <div className='total'>
            <span> Shipping </span>
            <span>  0 </span>
        </div>
        <div className='total'>
            <span> Total </span>
            <span> Rs :- {price} </span>
        </div>
    </div>
    </table>

    <br/>
    <br/>


    <div className='chckout'>
        <span>
        <button className='btn btn-success' onClick={handleOrder}>  Order Now </button>  
   </span> 
    <span>
  <Link to="/"> <button className='btn btn-warning btn-lg'> Continue Shopping </button>  </Link>
    </span>
   </div>
   </center>

    <ToastContainer/>
</>
  )
};

export default Checkout;