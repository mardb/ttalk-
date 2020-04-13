//fragment allows multiple react elements  in jsx
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-secondary ">
      <li className="nav-item">
        <Link to="/" className="text-white nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="text-white nav-link">Signup</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="text-white nav-link">About</Link>
      </li>
        <li className="nav-item">
            <Link to="/signup" className="nav-link text-white">
                Signup
            </Link>
        </li>
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

export default Layout;