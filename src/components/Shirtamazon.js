import React from 'react';
import { shirtlist } from './Data';
import Shirtcards from './Shirtcards';


const Shirtamazon = ({handleClick}) => {
  return (
    <section>
         {
      shirtlist.map((shirtitem)=>(
        <Shirtcards shirtitem={shirtitem} key={shirtitem.id} handleClick={handleClick}/>  
             ))
    }
  </section>
  )
};

export default Shirtamazon;