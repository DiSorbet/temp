import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({items, editItem}) => {
  return (
    <>
    {items.map(item=>{
      const {name,id} = item;
      return (
         <div key={id}>
          <h3>{name}</h3>
          <button className="edit-btn" onClick={()=>editItem(id)}><FaEdit/></button>
          <button className="delete-btn"><FaTrash/></button>
         </div>
      )
    })}
    </>
  );
};

export default List;
