import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";
const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    console.log("token", "values");
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const { name, token } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("Activate your account", response);
        //clean up state and empty values
        setValues({
          ...values,
          show: false,
        });
        toast.success(response.data.message, {
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
      })
      .catch((error) => {
        console.log(
          "There was an error activating your account.",
          error.response.data.error
        );
        toast.error(error.response.data.error, {
          className: css({
            color: "#721c24",
            background: "#f8d7da",
            border: "#f5c6cb",
            borderRadius: 4,
          }),
          bodyClassName: css({
            fontSize: "12px",
          }),
          progressClassName: css({
            background: "#721c24",
          }),
        });
      });
  };
  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">
        Hi {name}, Please activate Account by clicking the Activate Account
        button.{" "}
      </h1>
      <button className="btn btn-outline-secondary" onClick={clickSubmit}>
        Activate Account
      </button>
    </div>
  );

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
