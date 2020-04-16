import React,  { useState } from "react";
import Layout from "./Layout";
// import Posts from '../post/Posts'
import axios from "axios";
// import {Redirect} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
// import {isAuth } from '../auth/helpers'
import "react-toastify/dist/ReactToastify.min.css";
import {css} from 'glamor';



const Private = () => {
  const [values, setValues] = useState({
    role:"",
    name: "mar",
    email: "guzmanmarlene@yhaoo.com",
    password: "111111",
    buttonText: "Submit",
  });

  const { role, name, email, password, buttonText } = values;

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
            background: 'black'
          }),
          bodyClassName: css({
            fontSize: '60px'
          }),
          progressClassName: css({
            background: "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
          })
        });
      });
  };

  const updateForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Role</label>
        <input
          type="text"
          className="form-control"
          value={role}
        />
      </div>
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
        <h1 className="pt-5 text-center">Private Page</h1>
        <p className="lead text-center">Profile Update</p>
        {updateForm()}
      </div>
    </Layout>
  );
};

export default Private;




















// const Private = () => (
  
//   <Layout>
//     <h1>I am the signed in user. this is my home page. </h1>
//     <div>
//       <div className="jumbotron">
//         <h2>Home</h2>
//         <p className="lead">Welcome to my Blog</p>
//       </div>
//       <div className="container">
//         <h1>Posts will go here</h1>
//         <Posts/>
//       </div>
//     </div>
//   </Layout>
// );

// export default Private;
