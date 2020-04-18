import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  render() {
    return (
      <div cont className="row ">
        <div className="card col-md-4 mb-3">
          <div className="card-body">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>
        {/*  */}

        <div className="card col-md-4 mb-3">
          <div className="card-body ">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="card col-md-4">
          <div className="card-body">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>

        <div className="card col-md-4 mb-3">
          <div className="card-body">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>

        <div className="card col-md-4 ">
          <div className="card-body">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>

        <div className="card col-md-4">
          <div className="card-body">
            <img
              src={require("../images/comingsoon.png")}
              className="img-thunbnail mb-3"
              style={{ height: "200px", width: "100%" }}
            />
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">POST BODY</p>
            <br />
            <p className="font-italic mark">
              Posted by Martha Stewart
              <Link to=""> Link to Post </Link>
              on 4/15/2020
            </p>
            <Link to="" className="btn btn-raised btn-primary btn-sm">
              Read more
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    );
  }
}

export default Posts;