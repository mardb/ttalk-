import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { createPost } from "../auth/PostsAPI";
import { withRouter } from "react-router";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitClick = (event) => {
    event.preventDefault();
    // console.log("title is", title, "body is", body);
    createPost({
      title,
      body,
    });
    // history,push('/private')
  };

  return (
    <div className="col-md-6 offset-md-3">
      <form>
        <div className="form-group"></div>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Body</label>
          <textarea
            type="text"
            className="form-control"
            onChange={(event) => setBody(event.target.value)}
          />
        </div>

        <button
          href="/private"
          className="btn btn-raised btn-info"
          onClick={(event) => submitClick(event)}
        >
          Create Post
        </button>

        <Link className="btn btn-raised btn-danger mr-5" to="/private">
          cancel
        </Link>
      </form>
    </div>
  );
};

export default NewPost;
