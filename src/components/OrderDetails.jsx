import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderDetails = ({cart }) => {
  const [showData, setShowData] = useState([]);
   

  const navigate = useNavigate();
  
  useEffect(() => {
    const details = localStorage.getItem('details')?
    JSON.parse(localStorage.getItem ('details')):[];
setShowData(details);
  })
console.log(showData);

const back = () => {
  navigate("/checkout");
}

  return (
    <> 
    <div>
      <table className= "table table-bordered">
   <thead>
          <tr>
            <td className="table-primary"> First Name </td>
            <td className="table-primary"> Last Name </td>
            <td className="table-primary"> Age </td>
            <td className="table-primary"> Email  Address </td>
            <td className="table-primary"> Mobile Number  </td>
            <td className="table-primary"> Gender </td>
            <td className="table-primary"> State </td>
            <td className="table-primary"> City  </td>
            <td className="table-primary"> House Address </td>
            <td className="table-primary"> Pincode  </td>
          </tr>
 </thead> 
       <tbody>
            <tr>
          <td>{showData.username}</td>
          <td>{showData.lastname}</td>
          <td>{showData.age}</td>
          <td>{showData.email}</td>
          <td>{showData.phone}</td>
          <td>{showData.gender}</td>
          <td>{showData.state}</td>
          <td>{showData.city}</td>
          <td>{showData.street}</td>
          <td>{showData.pin}</td>
          </tr>
     </tbody>
        </table>
        <br/>
        <br/>
        <br/>
 <hr/>
  
    </div>


<div>
<table> 
<div className='billing'>
    <h1> Order Details </h1>
    <hr/>
        {
          cart?.map((item)=>(
      
            <div className='cart-box' key={item.id}>
            <div className='cart-image'>
            
                <img src={item.image} height="210" width="180"/>
                <p> {item.name} </p>
            
            </div>
          
            <div>
                <span> {item.price} </span>
            </div>
            </div>  
  ))  
        }

    </div>
    </table>
    <br/>

    <button className='btn btn-warning' onClick={back}> Back </button>

</div>
</>
  );
};

export default OrderDetails;








// import { useNavigate } from 'react-router-dom';

// const OrderDetails = () => {
// const [orderData, setOrderData] = useState(null);
// const navigate = useNavigate();

// useEffect(() => {
// const storedOrderData = JSON.parse(localStorage.getItem('orderData'));
// setOrderData(storedOrderData);
// }, []);

// const goBack = () => {
// navigate('/checkout');
// };

// return (
// <div>
// {orderData ? (
// <>
// <h1>Order Details</h1>
// <table className="table table-bordered">
// <thead>
// <tr>
// <th>Product</th>
// <th>Price</th>
// <th>Quantity</th>
// </tr>
// </thead>
// <tbody>
// {orderData.map((item, index) => (
// <tr key={index}>
// <td>{item.name}</td>
// <td>{item.price}</td>
// <td>{item.quantity}</td>
// </tr>
// ))}
// </tbody>
// </table>
// <br />
// <br />
// <br />
// <button className="btn btn-warning" onClick={goBack}>
// Back
// </button>
// </>
// ) : (
// <h1>No order data available.</h1>
// )}
// </div>
// );
// };

// export default OrderDetails;