import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Signup from "../components/Signup";
import About from "../components/About";
import Signin from "../components/Signin";
import Activate from "../components/Activate";
// import UserSignedinHome from '../core/UserSignedinHome';
import PrivateRoute from "../components/PrivateRoute";
import Private from "../core/Private";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/auth/activate/:token" exact component={Activate} />
        {/* <Route path="/usersignedinhome" exact component= {UserSignedinHome}/> */}
        {/* <Route path="/signout" exact component= {Signout}/> */}
        <PrivateRoute path="/private" exact component={Private} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
