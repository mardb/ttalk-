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
export const setLocalStorage = (key, value) =>{
  if(window !== 'undefined'){
    LocalStorage.setItem(key, JSON.stringify(value))
  }
}
//local storage
export const removeLocalStorage = (key) =>{
  if(window !== 'undefined'){
    LocalStorage.removeItem(key)
  }
}
//delete local storage
export const authenticate = (response, next) => {
  console.log('Authentication response:', response);
  setCookie('token', response.data.token)
  setLocalStorage('user',response.data.user)
  next();
}
// auth user during sign in 
export const isAuth = () => {
  if(window !== 'undefined') {
    const cookieChecked = getCookie('token');
    if(cookieChecked) {
      if(localStorage.getItem('user')) {
        return JSON.parse(localstorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};
//  retrieve user info 


