import React, { useState } from "react";
import axios from "axios";
import {Redirect, Link} from 'react-router-dom'
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import {isAuth } from '../auth/helpers'
import "react-toastify/dist/ReactToastify.min.css";
import { css } from 'glamor';


const Signup = () => {
  const [values, setValues] = useState({
    name: "marlene",
    email: "marleneguzmanla@gmail.com",
    password: "111111",
    buttonText: "Submit",
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        console.log("You have successfully signed up!", response);
        //clean up state and empty values
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("There was an error signing up.", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error, {
          className: css({
            background: 'rgb(247,231,231)',
            color: 'red'
          }),
          bodyClassName: css({
            fontSize: '12px'
          }),
          progressClassName: css({
            background: "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
          })
        });
      });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("name")}
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          className="form-control"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange("password")}
          value={password}
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
        {JSON.stringify({ name, email, password })}
        {isAuth() ? <Redirect to='/' /> : null}
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
        <br/>
        <Link className="btn btn-sm btn-outline-danger" to="/auth/forgot-password" > Forgot Password </Link>
      </div>
    </Layout>
  );
};

export default Signup;
