import React from 'react';
import Tour from './Tour';
const Tours = ({tours, setTours}) => {
  return <section>
    <div className='title'>
      <h2> our tours</h2> 
      <div className='underline'/>
    </div>
    <div>
      {tours.map((tour)=>{
        return <Tour tours={tours} setTours={setTours} key={tour.id} {...tour}/>
      })}
    </div>
  </section>;
};

export default Tours;
