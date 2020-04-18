import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Posts from '../post/Posts'
import axios from "axios";
// import {Redirect} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { isAuth, getCookie, signout, updateUser } from "../auth/helpers";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";

// const Private = (history) => {
//   const [values, setValues] = useState({
//     role: "",
//     name: "",
//     email: "",
//     password: "",
//     buttonText: "Submit",
//   });

//   const token = getCookie("token");

//   useEffect(() => {
//     loadProfile();
//   }, []);

//   const loadProfile = () => {
//     axios({
//       method: "GET",
//       url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Private profile update:", response);
//         const { role, name, email } = response.data;
//         setValues({ ...values, role, name, email });
//       })
//       .catch((error) => {
//         console.log("Private profile update error:", error.response.data.error);
//         if (error.response.status === 401) {
//           signout(() => {
//             //redirects to home page
//             history.push("/");
//           });
//         }
//       });
//   };

//   const { role, name, email, password, buttonText } = values;

//   const handleChange = (name) => (event) => {
//     console.log(event.target.value);
//     setValues({ ...values, [name]: event.target.value });
//   };

//   const clickSubmit = (event) => {
//     event.preventDefault();
//     setValues({ ...values, buttonText: "Submitting" });
//     axios({
//       method: "PUT",
//       url: `${process.env.REACT_APP_API}/user/update`,
//       data: { name, password },
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("User profile update success:", response);
//         updateUser(response, () => {
//           //clean up state and empty values
//           setValues({
//             ...values,
//             buttonText: "Submitted",
//           });
//         });
//         toast.success("Your profile has been updated!");
//       })
//       .catch((error) => {
//         console.log(
//           "There was an error updating your profile.",
//           error.response.data
//         );
//         setValues({ ...values, buttonText: "Submit" });
//         toast.error(error.response.data.error, {
//           className: css({
//             background: "rgb(247,231,231)",
//             color: "red",
//           }),
//           bodyClassName: css({
//             fontSize: "10px",
//           }),
//           progressClassName: css({
//             background:
//               "repeating-radial-gradient(circle at center, red 0, blue, green 30px)",
//           }),
//         });
//       });
//   };

//   const updateForm = () => (
//     <form>
//       <div className="form-group">
//         <label className="text-muted">Role</label>
//         <input
//           disabled
//           type="text"
//           className="form-control"
//           defaultValue={role}
//         />
//       </div>
//       <div className="form-group">
//         <label className="text-muted">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           onChange={handleChange("name")}
//           value={name}
//         />
//       </div>

//       <div className="form-group">
//         <label className="text-muted">Email</label>
//         <input
//           disabled
//           type="email"
//           className="form-control"
//           defaultValue={email}
//         />
//       </div>

//       <div className="form-group">
//         <label className="text-muted">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           onChange={handleChange("password")}
//           value={password}
//         />
//       </div>

//       <div>
//         <button className="btn btn-secondary" onClick={clickSubmit}>
//           {buttonText}
//         </button>
//       </div>
//     </form>
//   );

//   return (
//     <Layout>
//       <div className="col-md-6 offset-md-3">
//         <ToastContainer />
//         {JSON.stringify({ name, email, password })}
//         <h1 className="pt-5 text-center">Private Page</h1>
//         <p className="lead text-center">Profile Update</p>
//         {updateForm()}
//       </div>
//     </Layout>
//   );
// };

// export default Private;

const Private = () => (

  <Layout>
    <h1>I am the signed in user. this is my home page. </h1>
    <div>
      <div className="jumbotron text-center">
        <h2>Home</h2>
        <p className="lead">Welcome to my Blog</p>
      </div>
      <div className="container">
        <h1>Posts will go here</h1>
        <Posts/>
      </div>
    </div>
  </Layout>
);

export default Private;
