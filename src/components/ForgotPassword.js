import React, { useState } from "react";
import axios from "axios";
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { set } from "mongoose";
import {css} from 'glamor'

const ForgotPassword = ({history}) => {
  const [values, setValues] = useState({
    email: "",
    buttonText: "RESET PASSWORD",
  });

  const { email, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/forgot-password`,
      data: { email},
    })
      .then((response) => {
        console.log("you have entered an email for forgot password:", response);
        toast.success(response.data.message)
        setValues({...values, buttonText: 'Requested'})
      })
      .catch((error) => {
        console.log("There was an error forgot password :", error.response.data);
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
        setValues({ ...values, buttonText: "Requested" });
      });
  };

  const forgotPasswordForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          className="form-control"
          onChange={handleChange("email")}
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
       
        <h1 className="p-5 text-center">Forgot Password </h1>
        {forgotPasswordForm()}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
