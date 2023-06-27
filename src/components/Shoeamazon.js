import React from 'react';
import { shoelist } from './Data';
import Shoecard from './Shoecard';


const Shoeamazon = ({handleClick}) => {
  return (
  <section>
    {
        shoelist.map((shoeitem)=>(
   <Shoecard shoeitem={shoeitem} key={shoeitem.id} handleClick={handleClick}/>  
        ))
    }
  </section>
    )
};

export default Shoeamazon;