const BASE_URL = "http://localhost:4000";
const POSTS = '/posts';
const POST = '/post';

export const index = () => {
  return fetch(BASE_URL + POSTS)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const update = (post) => {
  return fetch(`${BASE_URL}${POST}/${post._id}`, {
    withCredentials: true,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const deletePost = (post) => {
  return fetch(`${BASE_URL}${POSTS}/${post._id}`, {
    credentials: 'include',
    method: 'DELETE'
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}

export const createPost = (newPost) => {
  console.log('new post', newPost)
  return fetch(BASE_URL + POST, {
    withCredentials: true,
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newPost)
  })
    .then(res => res.json())
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