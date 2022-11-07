import React, { useState, useRef, useEffect, useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AppContext } from "./context";

const Submenu = () => {
  const [columns, setColumns] = useState('col-2')
  const {  
    isSubmenuOpen, 
    location,
     page: { page, links }} =useContext(AppContext);

  const container = useRef(null);

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length ===3) {
      setColumns('col-3')
    }
    if(links.length >3) {
      setColumns('col-4')
    }
  }, [page, location, links])

  return (
    <aside className={`${isSubmenuOpen ? 
      "submenu show" : "submenu"}`} ref={container}>
           <section>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns} `}>
             {links.map((link, index)=>{
              const {label, icon, url}=link
              return (
                <a key={index} href={url}>{icon} {label}</a>
              )
             })}
            </div>
           </section>
      </aside>
  );
};
  
export default Submenu