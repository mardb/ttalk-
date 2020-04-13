import React, {useState} from 'react';
// import {Link, Redirect} from 'react-router-dom';
// import axios from 'axios';
import Layout from '../core/Layout';
import{ToastContainer
  // , toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {
    const [values] = useState({
        name: "mar",
        email: "m@go.com",
        password: "111111",
        buttonText: "Submit"
    });

    const {name, email, password, buttonText} = values

    const handleChange= (name) => (event) => {

    }

    const clickSubmit = event => {

    }

const signupForm = () => (
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input type="text" className="form-control" onChange={handleChange("name")} value={name} />
            </div>

            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input type="email" className="form-control" onChange={handleChange(email)} value={email}/>
            </div>

            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input type="password" className="form-control" onChange={handleChange(password)} value={password}/>
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
                <h1 className="p-5 text-center">Signup</h1>
                {signupForm()}
            </div>
        </Layout>
    );
};

export default Signup;
