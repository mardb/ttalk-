//fragment allows multiple react elements  in jsx
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-secondary ">
      <li className="nav-item">
        <Link href="/" className="text-white nav-link">Home</Link>
      </li>

      <Fragment>
        <li className="nav-item">
            <Link to="/signin" className="nav-link text-light">
                Signin
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/signup" className="nav-link text-white">
                Signup
            </Link>
        </li>
      </Fragment>
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