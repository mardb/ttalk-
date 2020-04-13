import React
// , {useState} 
from 'react';
// import {Link, Redirect} from 'react-router-dom';
// import axios from 'axios';
import Layout from '../core/Layout';
import{ToastContainer
  // , toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {

return(
  <Layout>
  <div className="col-md-6 offset-md-3">
      <ToastContainer />
      <h1 className="p-5 text-center">Signup</h1>
  </div>
</Layout>
)
};

export default Signup;

