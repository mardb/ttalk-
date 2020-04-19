import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from 'jsonwebtoken'
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { set } from "mongoose";
import {css} from 'glamor'

const ResetPassword = ({match}) => {
  const [values, setValues] = useState({
    name: "",
    toke:'',
    newPassword:'',
    buttonText: "Reset Password",
  });

  useEffect(() =>{
    let token = match.params.token
    let {name} = jwt.decode(token)
    if(token) {
      setValues({ ...values, name, token })
    }
  }, [])

  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/reset-password`,
      data: { newPassword, resetPasswordLink: token},
    })
      .then((response) => {
        console.log("you have reset your password:", response);
        toast.success(response.data.message)
        setValues({...values, buttonText: 'Success'})
      })
      .catch((error) => {
        console.log("There was an error resetting password :", error.response.data);
        toast.error(error.response.data.error, {
          className: css({
            color: "#155724",
            background: "#d4edda",
            border: "#c3e6cb",
            borderRadius: 4,
          }),
          bodyClassName: css({
            fontSize: "12px",
          }),
          progressClassName: css({
            background: "#155724",
          }),
        })
        setValues({ ...values, buttonText: "Reset" });
      });
  };

  const resetPasswordForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          placeholder="Please enter a new password"
          value={newPassword}
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      
      <div>
        <button className="btn btn-secondary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
       
        <h1 className="p-5 text-center">Hey {name}, Please type your new password. </h1>
        {resetPasswordForm()}
      </div>
    </Layout>
  );
};

export default ResetPassword;
