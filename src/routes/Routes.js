import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Signup from '../auth/Signup';
import About from '../auth/About';
import Signin from '../auth/Signin';

const Routes = () => {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/about" exact component= {About}/>
          <Route path="/signup" exact component= {Signup}/>
          <Route path="/signin" exaact component= {Signin}/>
          {/* <Route path="/signout" exact component= {Signout}/> */}
        </Switch>
      </BrowserRouter>

  )
}

export default Routes;