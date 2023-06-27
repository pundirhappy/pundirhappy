import React , {useState , useEffect}from 'react';
import axios from 'axios';


const ProductDetails = ({item , handleClick}) => {

  const[product , setProduct]= useState();

  useEffect(()=>{
    getDetails();
    console.log(product);
    },[]);

  const getDetails = async () => {
    await axios.get("http://localhost:4000/posts").then(res=> setProduct(res.data));
    };

  return (
    <div>

<table className="table table-hover">

    <tr>
      <th scope="col">  Yellow  </th>
      <th scope="col">  Plain Yellow  </th>
      <th scope="col"> Printed </th>

    <br/>
    </tr>

  {
      product && product.map (data =>(
        <tr>

      <td> <p onClick={()=>handleClick(item)}> <button> add to cart</button> </p> <img src={data.yellowshirt} height="280"/>  {data.tshirtprice1}   </td> 
      <td>  <p> <button> add to cart</button> </p> <img src={data.yelshirt}  height="280"/>  {data.tshirtprice2}    </td>
      <td>  <p> <button> add to cart</button></p> <img src={data.printedshirt} height="280"/> {data.tshirtprice3} </td>
      </tr>
  
  ))
  }
</table>
    </div>


  )
};

export default ProductDetails;

