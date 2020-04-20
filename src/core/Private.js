import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Posts from "../post/Posts";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { isAuth, getCookie, signout, updateUser } from "../auth/helpers";
import "react-toastify/dist/ReactToastify.min.css";
import NewPost from "../post/NewPost";
// import { css } from "glamor";



console.log({Posts})

const Private = () => (
  <Layout>
    <div className="container">
      <div>
        <div className="jumbotron text-center">
          <h2>Welcome!</h2>
          <p className="lead"></p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src={require("../images/imageedit_1_4006947766.png")}
              style={{ height: "200px", width: "auto" }}
            />
          </div>

          <div className="col-md-8">
            <div className="lead mt-2">
              <p>
                Hello Marlene!
                {/* {user.name} */}
              </p>
              <p>
                Email: guzmanmarlene@yahoo.com
                {/* {user.email} */}
              </p>
              {/* <p>{`Joined ${new Date(user.created).toDateString()}`}</p> */}
            </div>

            <div className="d-inline-block">
              <Link
                className="btn btn-raised btn-info mr-5"
                to="/private/create-post"

                // to={`/user/edit/${user._id}`}
              >
                Create Post
              </Link>
               {/*  */}
                
               {/*  */}

              <Link
                variant="outline-info"
                className="btn btn-raised mr-5"
                to="/private/update-profile"
                // to={`/user/edit/${user._id}`}
              >
                Edit Profile
              </Link>
              {/* <DeleteUser userId={user._id} /> */}
            </div>
            {/* } */}
          </div>
        </div>

        <div className="container">
        
          <Posts />
        </div>
      </div>
    </div>
  </Layout>
);

export default Private;















// ignore


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
//         toast.success("Your profile has been updated!",{
//     className: css({
//     color: "#155724",
//     background: "#d4edda",
//     border: "#c3e6cb",
//     borderRadius: 4,
//   }),
//   bodyClassName: css({
//     fontSize: "12px",
//   }),
//   progressClassName: css({
//     background: "#155724",
//   }),
// });
//       })
//       .catch((error) => {
//         console.log(
//           "There was an error updating your profile.",
//           error.response.data
//         );
//         setValues({ ...values, buttonText: "Submit" });
//         toast.error(error.response.data.error, {
//       className: css({
//         color: "#721c24",
// background: "#f8d7da",
// border: "#f5c6cb",
// borderRadius: 4,
//       }),
//       bodyClassName: css({
//         fontSize: '12px'
//       }),
//       progressClassName: css({
//         background: "#721c24"
//       })
//     });
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
//         )}
//         <h1 className="pt-5 text-center">Private Page</h1>
//         <p className="lead text-center">Profile Update</p>
//         {updateForm()}
//       </div>
//     </Layout>
//   );
// };

// export default Private;



