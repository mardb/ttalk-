import React from // , {useState}
"react";
// import {Link, Redirect} from 'react-router-dom';
// import axios from 'axios';
import Layout from "../core/Layout";
import {
  ToastContainer,
  // , toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signin = () => {


  
  const signinForm = () => (
    <form>
      <div className="form-group">
        <lable className="text-muted">Email</lable>
        <input type="email" className="form-control"/>
      </div>

      <div className="form-group">
        <lable className="text-muted">Password</lable>
        <input type="password" className="form-control"/>
      </div>
      <div>
        <button className="btn btn-secondary">Signin</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        <h1 className="p-5 text-center">Signin</h1>
        {signinForm()}
      </div>
    </Layout>
  );
};

export default Signin;

