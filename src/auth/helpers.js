import cookie from 'js-cookie'

//save cookie in browser cookie 
export const setCookie = (key, value) => {
  if(window !== 'undefined') {
    cookie.set(key, value, {
      expires: 1 //1 day
    })
  }
}
//signs user out and removes browser cook 
export const removeCookie = (key) =>{
  if(window !== 'undefined') {
    cookie.remove(Key, {
      expires: 1 //expires in one day
    })
  }
}
//stored stoke

export const getCookie = () =>{
  if(window !== 'undefined'){
    return cookie.get(key)
  }
}

//token request to server

//local storage

//delete local storage

// auth user during sign in 

//  retrieve user info 


