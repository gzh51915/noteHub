import React from 'react';
import Login from '@/components/login/Login.jsx'
import Register from '@/components/register/Register.jsx'
import SubareaDetail from '@/components/SubareaDetail/SubareaDetail'
import Question from '@/components/Publish/Question'
import Answer from '@/components/Publish/Answer'
// import Demo from '../ListView'
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
          <Route path='/register' component={Register}></Route>
          {/* <Route path='/' component={Question}></Route> */}
          <Route path='/' component={Answer}></Route>
          {/* <Route path='/' component={Demo}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
