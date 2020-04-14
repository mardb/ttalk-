import React, { useState } from "react";
import axios from "axios";
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
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


        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(`Hi ${response.data.user.name}, Welcome back!`);
      })
      .catch((error) => {
        console.log("There was an error signing in!", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
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
        <h1 className="p-5 text-center">Signin</h1>
        {signinForm()}
      </div>
    </Layout>
  );
};

export default Signin;
// ***