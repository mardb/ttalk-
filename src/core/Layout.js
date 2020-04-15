//fragment allows multiple react elements  in jsx
import React, {Fragment} from 'react';
import {Link, withRouter } from 'react-router-dom';
import {isAuth} from '../auth/helpers'
const Layout = ({match, children}) => {
  //path compares to history 
  const isActive = path => {
    if(match.path === path){
      return{color: '#000'}
    } else {
      return {color: '#fff'}
    }
  }

  const nav = () => (
    <ul className="nav nav-tabs bg-secondary ">
      <li className="nav-item">
        <Link to="/" className=" nav-link" style={isActive('/')} >Home</Link>
      </li>

    {!isAuth() && (
      <Fragment>
      {/* <div>   can use Fragment too if styling messes up */}
      <li className="nav-item">
        <Link to="/signin" className="nav-link " style={isActive('/signin')} >Signin</Link>
      </li>
      
      <li className="nav-item">
        <Link to="/signup" className="nav-link" style={isActive('/signup')} >Signup</Link>
      </li>
      </Fragment>
        )}
       
    </ul>
    
  )

  return(
    <Fragment>
      {nav()}
      <div className="container">
        {children}
      </div>
    </Fragment>
  )
}

export default withRouter(Layout);