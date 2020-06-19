import React from 'react';
import Navbar from "./components/Navbar"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
//应用根组件
function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route to="/" component={Navbar}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
