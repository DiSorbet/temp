import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, tours, setTours}) => {
  const [readMore, setReadMore] = useState(false)

  const deleteItem = (id)=>{
setTours(tours.filter(tour => tour.id !==id))
  }

  return <article className='single-tour'>
     <img src={image} alt={name}/>
     <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p >{readMore ? info : `${info.substring(0,200)}...`}
      <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show more': 'show less'}</button>
     </p>
      <button className='delete-btn' onClick={()=>deleteItem(id)}>
        not interested
      </button>
     </footer>
    </article>;
};

export default Tour;
