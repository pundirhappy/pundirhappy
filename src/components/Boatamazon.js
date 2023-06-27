import React from 'react';
import list, { boatlist } from './Data';
import Boatcards from './Boatcards';



const Boatamazon = ({handleClick}) => {
  return (
  <section>
    {
        boatlist.map((boatitem)=>(
   <Boatcards boatitem={boatitem} key={boatitem.id} handleClick={handleClick}/>  
        ))
    }
  </section>
    )
};

export default Boatamazon;