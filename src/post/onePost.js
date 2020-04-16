import React, { Component } from 'react';

class onePost extends React.Component {



  return(){
    this.render(
      <div className="card-body">
        <img
            src=""
            alt=""
            className="img-thunbnail mb-3"
            style={{
                height: '300px',
                width: '100%',
                objectFit: 'cover'
            }}
        />

        <h3>
          <i
              className="fa fa-thumbs-up text-success bg-dark"
              style={{ padding: '10px', borderRadius: '50%' }}
          />
          1 Like
        </h3>

        <h3>
            <i
                className="fa fa-thumbs-up text-warning bg-dark"
                style={{ padding: '10px', borderRadius: '50%' }}
            />
            1 Like
        </h3>
      <p className="card-text">This is the body of the post</p>
      <br />
      <p className="font-italic mark">
          Posted by <Link to=""> Martha Stewart</Link>
          on 04/20/2020
      </p>
      <div className="d-inline-block">
          <Link to={`/`} className="btn btn-raised btn-primary btn-sm mr-5">
              Back to posts
          </Link>
          <>
              <Link to="" className="btn btn-raised btn-warning btn-sm mr-5">
                  Update Post
              </Link>
              <button className="btn btn-raised btn-danger">
                  Delete Post
              </button>
          </>
          <div>
            <div class="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <p className="mb-2 text-danger">Edit/Delete (bonus)</p>
                    <Link
                        to=""
                        className="btn btn-raised btn-warning btn-sm mr-5"
                    >
                        Update Post
                    </Link>
                    <button className="btn btn-raised btn-danger">
                        Delete Post
                    </button>
                </div>
            </div>
          </div>
      </div>
  </div>


    )
  }
}

export default onePost;