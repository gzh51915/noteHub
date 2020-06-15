import React from 'react';
import Navbar from "./components/Navbar"
import Search from "./components/Search"
//应用根组件
function App() {
  return (
    <div className="App" >
      <Search></Search>
      <Navbar></Navbar>
    </div >
  );
}

export default App;
