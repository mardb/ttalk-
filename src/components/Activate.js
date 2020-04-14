import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from 'jsonwebtoken'
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Activate = ({match}) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(()=>{
    // console.log('lalalalala')
    let token = match.params.token
    let {name} = jwt.decode(token)
    console.log('token', 'values')
    if(token) {
      setValues({...values, name, token })
    }
  }, [])
  

  const { name, token} = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signup/account-activation`,
      data: {token}
    })
      .then((response) => {
        console.log("Activate your account", response);
        //clean up state and empty values
        setValues({
          ...values,
          show: false,
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("There was an error activating your account.", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  const activationLink= () => (
    <div className="text-center">
       <h1 className="p-5">Hi {name}, Please activate Account by clicking the Activate Account button. </h1>
       <button className="btn btn-outline-secondary" onClick={clickSubmit}>Activate Account</button>
    </div>
  )

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
