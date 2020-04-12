//fragment allows multiple react elements  in jsx
import React, {Fragment} from 'react';

const Layout = ({children}) => {
  return(
    <Fragment>
      <p>this is the navigation bar</p>
      <div className="container">
        {children}
      </div>
    </Fragment>
  )
}

export default Layout;