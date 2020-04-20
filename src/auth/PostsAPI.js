const endpoint = "http://localhost:4000/posts";
const endpoint2 = "http://localhost:4000/post";

export const index = () => {
  return fetch(endpoint)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const update = (post) => {
  return fetch(`${endpoint2}/${post._id}`, {
    withCredentials: true,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => {
    console.log('res', res)
    res.json()
  })
  .catch(err => console.log(err))
}

export const deletePost = (post) => {
  return fetch(`${endpoint2}/${post._id}`, {
    credentials: 'include',
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}

export const createPost = (newPost) => {
  console.log('new post', newPost)
  return fetch(`${endpoint2}`, {
    //redntials: 'include',
    withCredentials: true,
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newPost)
  })
    .then(res => {
      console.log('create post', res)
      res.json()
    })
    .catch(err => console.log(err))
}

// export default {
//   index,
//   update,
//   deletePost,
//   createPost
// }





// -

// const postIndex = () => {
//   fetch("http://localhost:4000/posts")
//   .then(res => res.json())
//   .catch(err => console.log(err))
//  }

//  export const update = () => {

//  }

// // export const 
// export default {
//   postIndex
// }