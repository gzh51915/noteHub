import React from 'react';
import Login from '../../components/login/Login.jsx'
import Discover from '@/views/discover'
import './app.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import SubareaDetail from '@/components/SubareaDetail/SubareaDetail'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Discover}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/SubareaDetail' component={SubareaDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
