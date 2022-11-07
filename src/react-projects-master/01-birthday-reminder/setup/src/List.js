import React from 'react';

const List = ({people, setPeople}) => {
  return (
    <>
      <ul>
        {people.map((item)=>{
         const {id, name, age, image} = item
          return (
            <article key={id} className='person'>
              <img src={image} alt={name}/>
              <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>

            </article>
          )
        })}
      </ul>
    </>
  );
};

export default List;
