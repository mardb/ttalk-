import React from "react";
import { Link } from "react-router-dom";

const NewPost = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <form>
        <div className="form-group"></div>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label className="text-muted">Body</label>
          <textarea type="text" className="form-control" />
        </div>

        <button className="btn btn-raised btn-info">Create Post</button>
        <Link className="btn btn-raised btn-danger mr-5" to="/private">
          cancel
        </Link>
      </form>
    </div>
  );
};

export default NewPost;
