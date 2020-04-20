import cookie from "js-cookie";

//save cookie in browser cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1, //1 day
    });
  }
};
//signs user out and removes browser cook
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1, //expires in one day
    });
  }
};
//stored stoke

export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

//token request to server
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
//local storage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};
//delete local storage
export const authenticate = (response, next) => {
  console.log("Authentication response:", response);
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};
// auth user during sign in
//middlware
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
//  retrieve user info when leaving session -remove middleware

export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

//update user

export const updateUser = (response, next) => {
  console.log("Update user in localstorage helpers:", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};


