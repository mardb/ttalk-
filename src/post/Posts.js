import React, { Component } from "react";
import { Link } from "react-router-dom";
// import OnePost from "../post/OnePost";
import * as PostsAPI from "../auth/PostsAPI";
class Posts extends Component {
  state = {
    selectedPost: {
      title: '',
      body: '',
    }
  };
  //component did mount that makes an API call to the function that returns all posts
  // and set state get info and set state
  // set State will trigger render.. so pass info to render function
  //when i get info, iterate data. (posted By) change hardcoded data to the data from API response

  componentDidMount() {
    PostsAPI.index().then((res) => {
      console.log(res.posts);
      this.setState({ posts: res.posts });
    });
  }

// TODO
  // - close the modal when the server returns
// - show an error message if it can't update
// - re-render the table with the latest posts information

  handleUpdate = (post) => {
 
    PostsAPI.update(this.state.editingPost).then((res) => {
      console.log(res);
      let posts = this.state.posts;
      let postToUpdate = posts.findIndex((post) => post._id === res._id);
      posts[postToUpdate] = res;
      this.setState({ posts });
    });
  };

  handleUpdateField= (field) => (event) => {
    const post = 
      //todo 
      //place to hold changes
      this.state.editingPost
//upate and save to posts state

    
    post[field]= event.target.value
    this.setState({editingPost: post})
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitEdit = () => {
    let postToUpdate = {
      _id: this.state.editingPost._id,
      title: this.state.editingPost.title,
      body: this.state.editingPost.body,
    };
    PostsAPI.update(postToUpdate);
    this.setState({ isEditing: !this.state.isEditing });
  };
  

  handleDelete = (id) => {
    PostsAPI.deletePost(id).then((res) => {
      let posts = this.state.posts.filter((post) => {
        return post._id !== id;
      });
      this.setState({
        posts,
      });
    });
  };
  
  // handleDelete(id){
  //API call to delete route
  //update the state  to trigger a render
  // if Notification,  click delete post and refresh the page

  // }


  // createPost = (post) => {
  //   let newPost = {
  //     title: this.post.title,
  //     body: this.state.body,
  //   };
  //   PostsAPI.createPost(newPost).then((res) => {
  //     let post = this.state.post;
  //     let newPosts = posts.push(res.data);
  //     this.setState({ newPosts });
  //   });
  // };


  render() {
    //  render() {
    let posts = this.state.posts;
    console.log(this.state);
   
    return (
      <div className="container">
        <h3 className="subtitle PostContainer-h3">Latest Posts</h3>
        {posts &&
          posts.map((post) => {
            return (
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => this.setState({ selectedPost: post })}
                      >
                        {post.title}
                      </button>

                          {/* modal button */}
                        <button
                        type="button"
                        className="btn btn-outline-info float-right"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"
                        onClick={() => {
                          // this.handleUpdate(post._id);
                          this.setState({editingPost: post})
                        }}
                      >
                        update
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger float-right"
                        onClick={() => {
                          this.handleDelete(post._id);
                        }}
                      >
                        delete
                      </button>

                      {/* modal */}

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                             
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label

                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                  >
                                    Title:
                                  </label>
                                  <input
                                  onChange={this.handleUpdateField("title")}
                                  value={post.title}
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Body:
                                  </label>
                                  <textarea
                                  onChange={this.handleUpdateField('body')}
                                  value={post.body}
                                    className="form-control"
                                    id="message-text"
                                  ></textarea>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-primary"
                                
                                onClick={this.submitEdit}
                              >
                                Update Post
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                // onClick={this.handleEdit}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>


                      {/*  */}
                      <div
                        className="modal fade"
                        id="exampleModalLong"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                              >
                                {this.state.selectedPost.title}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">{this.state.selectedPost.body}</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              {/* <button type="button" class="btn btn-primary">
                                Save changes
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    {/* <div className="card-body">{post.body}</div> */}
                    <div className="container">
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}


export default Posts;
