import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}
 
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const addNewItem=(e)=>{
    e.preventDefault()
    const newItem={name, id: new Date().getTime().toString()}
    setList([...list, newItem])
     if (name && isEditing) {
      setList(list.map((item=>{
        if(item.id ===editId){
          return {...item, name}
        }
        return item;
      })))
     }
     setName('')
     setIsEditing(false)
     setEditId(null)
    }

    const editItem =(id)=>{
      const specificItem= list.find(item=>item.id === id)
      setIsEditing(true)
      setEditId(id)
      setName(specificItem.name)
    }

    useEffect(()=>{
      localStorage.setItem('list', JSON.stringify(list))
    }, [list])
 

  
  return (
    <>
      <section className="section-center" onSubmit={addNewItem}>
        <form className="grocery-form">
          <input
            type="text"
            className="grocery"
            placeholder="apple"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {" "}
            {isEditing ? "edit" : "submit"}
          </button>
        </form>
      </section>

      <div className="grocery-container">
        <List editItem={editItem} items={list}/>
      </div>
    </>
  );
  }

export default App;
