//fragment allows multiple react elements  in jsx
import React, {Fragment} from 'react';

const Layout = ({children}) => {
  const nav = () => (
    <ul className="nav nav-tabs bg-secondary ">
      <li className="nav-item">
        <a href="/" className="text-light nav-link">Home</a>
        <a href="/" className="text-light nav-link">About</a>
        <a href="/" className="text-light nav-link">Signin</a>
        <a href="/" className="text-light nav-link">Logout</a>
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