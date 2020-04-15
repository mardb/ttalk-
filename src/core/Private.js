import React from "react";
import Layout from "./Layout";

const Private = () => (
  <Layout>
    <h1>I am the signed in user. this is my home page. </h1>
    <div>
      <div className="jumbotron">
        <h2>Home</h2>
        <p className="lead">Welcome to my Blog</p>
      </div>
      <div className="container">
        <h1>Posts will go here</h1>
      </div>
    </div>
  </Layout>
);

export default Private;
