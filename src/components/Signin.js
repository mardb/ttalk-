import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../auth/helpers";
import "react-toastify/dist/ReactToastify.min.css";
import Google from "../auth/GoogleAuth";
// import { set } from "mongoose";
import { css } from "glamor";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const informParent = (response) => {
    authenticate(response, () => {
      isAuth() && isAuth().role === "private"
        ? history.push("/private")
        : console.log("please chec inform parent error");
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("You have successfully signed in!", response);
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
          });
          toast.success(`Hi ${response.data.user.name}, Welcome back!`, {
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
          });
          isAuth() && isAuth().role === "subscriber"
            ? history.push("/private")
            : history.push("/");
        });
      })
      .catch((error) => {
        console.log("There was an error signing in!", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error, {
          className: css({
            color: "#721c24",
    background: "#f8d7da",
    border: "#f5c6cb",
    borderRadius: 4,
          }),
          bodyClassName: css({
            fontSize: '12px'
          }),
          progressClassName: css({
            background: "#721c24"
          })
        });
      });
  };

  const signinForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          className="form-control"
          onChange={handleChange("email")}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange("password")}
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
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="p-5 text-center">Signin</h1>
        <Google informParent={informParent} />
        {signinForm()}
        <br />
        <Link className="btn btn-outline-danger" to="/auth/forgot-password">
          {" "}
          Forgot Password{" "}
        </Link>
      </div>
    </Layout>
  );
};

export default Signin;
