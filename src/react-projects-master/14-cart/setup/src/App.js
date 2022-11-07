import React from "react";
import { AppProvider } from "./context";

// components
import Home from "./Home";
// items

function App() {


  return (
    <AppProvider>
      <Home/>
    </AppProvider>
  );
}

export default App;
