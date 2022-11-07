import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [location, setLocation]= useState({})
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const openSubmenu=()=>{

  }

  const closeSubmenu=()=>{

  }

  return (
    <AppContext.Provider
     value={{
      openSubmenu, 
      closeSubmenu, 
      isSubmenuOpen,
      location
     }}>
      {children }
    </AppContext.Provider>
  )
};

export { AppContext, AppProvider };
