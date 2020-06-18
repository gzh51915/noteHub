import React from 'react';
import Login from '@/components/login/Login.jsx'
import Register from '@/components/register/Register.jsx'
import SubareaDetail from '@/components/SubareaDetail/SubareaDetail'
import Discover from '@/views/discover'
import './app.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/discover' exact component={Discover}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/SubareaDetail' component={SubareaDetail}></Route>
          <Route path='/' component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
