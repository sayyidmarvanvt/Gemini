import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./index.css"

const App = () => {
  return (
    <div className="h-screen flex ">
      <Sidebar />
      <Main/>
    </div>
  );
};

export default App;
